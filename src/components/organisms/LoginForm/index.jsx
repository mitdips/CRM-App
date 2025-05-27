import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useState} from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import PasswordField from '../../molecules/PasswordFields';
import RememberForgot from '../../molecules/RememberForget';
import {useStyle} from './style';
import {loginValidationSchema} from '../../../utils/validationSchema';
import Text from '../../atoms/Text';
import EmailField from '../../molecules/EmailField';
import Button from '../../atoms/Button';
import {setUserData} from '../../../redux/slices/AuthSlice';
import {useDispatch} from 'react-redux';
import {COLORS} from '../../../utils/colors';
import CustomVectorIcon from '../../atoms/VectorIcon';
import {scale} from 'react-native-size-matters';

const LoginForm = ({navigation, route, showToast}) => {
  const [remember, setRemember] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const styles = useStyle();
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleLogin = async (values, {setSubmitting}) => {
    try {
      const auth = getAuth();

      const userCredential = await auth.signInWithEmailAndPassword(
        values.email,
        values.password,
      );

      const userData = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
        photoURL: userCredential.user.photoURL,
        phoneNumber: userCredential.user.phoneNumber,
        emailVerified: userCredential.user.emailVerified,
        metadata: {
          creationTime: userCredential.user.metadata.creationTime,
          lastSignInTime: userCredential.user.metadata.lastSignInTime,
        },
      };

      dispatch(setUserData(userData));
      showToast('Login Successful');
    } catch (error) {
      console.error('Login Error:', {
        code: error.code,
        message: error.message,
        fullError: error,
      });

      let errorMessage = 'Login failed';
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address';
          break;
        case 'auth/user-disabled':
          errorMessage = 'This account has been disabled';
          break;
        case 'auth/user-not-found':
          errorMessage = 'User not found';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Invalid password';
          break;
        case 'auth/invalid-credential':
          errorMessage = 'Invalid credentials';
          break;
        default:
          errorMessage = error.message;
      }
      showToast(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setGoogleLoading(true);
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const signInResult = await GoogleSignin.signIn();

      let idToken = signInResult?.data?.idToken;
      if (!idToken) {
        idToken = signInResult?.idToken;
      }

      if (!idToken) {
        throw new Error(
          'No ID token found. Please ensure Google Sign-In is configured correctly and returns an idToken.',
        );
      }

      const googleCredential = GoogleAuthProvider.credential(idToken);

      const auth = getAuth();
      const authResult = await signInWithCredential(auth, googleCredential);

      if (authResult.user) {
        const userData = {
          uid: authResult.user.uid,
          email: authResult.user.email,
          displayName: authResult.user.displayName,
          photoURL: authResult.user.photoURL,
          phoneNumber: authResult.user.phoneNumber,
          emailVerified: authResult.user.emailVerified,
          metadata: {
            creationTime: authResult.user.metadata.creationTime,
            lastSignInTime: authResult.user.metadata.lastSignInTime,
          },
        };

        dispatch(setUserData(userData));
        showToast('Login Successful');
      } else {
        console.error('❌ User object not found in Google authResult.');
        throw new Error('User authentication failed, no user data found.');
      }
    } catch (error) {
      console.error('❌ Google sign-in failed:', error);
      let errorMessage = 'Google sign-in failed.';
      if (error.code === 'auth/account-exists-with-different-credential') {
        errorMessage =
          'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.';
      } else if (error.message.includes('No ID token found')) {
        errorMessage = 'Google Sign-In failed: Could not retrieve ID token.';
      }
      showToast(errorMessage);
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleLogin}>
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        isSubmitting,
      }) => (
        <View style={styles.formContainer}>
          <EmailField
            value={values.email}
            onChangeText={handleChange('email')}
            error={touched.email && errors.email}
          />
          <PasswordField
            placeholder="Password"
            value={values.password}
            onChangeText={handleChange('password')}
            error={touched.password && errors.password}
          />
          <View style={{gap: scale(10)}}>
            <RememberForgot
              remember={remember}
              onCheckboxPress={() => setRemember(!remember)}
              onForgotPasswordPress={() =>
                navigation.navigate('ForgotPassword')
              }
            />
            <Button
              postfixLogo={
                <CustomVectorIcon
                  name="Ionicons:arrow-forward"
                  size={20}
                  color={COLORS.white}
                />
              }
              onPress={handleSubmit}
              loading={isSubmitting}
              disabled={isSubmitting}
              title="Sign In"
            />
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.dividerLine} />
            </View>
            <Button
              title="Sign in with Google"
              outlineColor={COLORS.primary}
              outlineWidth={2}
              onPress={handleGoogleSignIn}
              loading={googleLoading}
              disabled={googleLoading}
              prefixLogo={
                <CustomVectorIcon
                  name="MaterialCommunityIcons:google"
                  size={22}
                  color={COLORS.primary}
                />
              }
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;

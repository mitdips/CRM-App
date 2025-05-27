import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useState, useEffect} from 'react';
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
      console.log('Login Started:', {
        email: values.email,
        attemptTime: new Date().toISOString(),
      });

      const auth = getAuth();
      console.log('Attempting to sign in with:', values.email);

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

      console.log('Login Success - User Data:', userData);
      dispatch(setUserData(userData));
      showToast('Login Successful');
      console.log('Login process completed successfully');
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
        default:
          errorMessage = error.message;
      }
      console.log('Showing error toast:', errorMessage);
      showToast(errorMessage);
    } finally {
      console.log('Login attempt completed');
      setSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setGoogleLoading(true);
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const signInResult = await GoogleSignin.signIn();

      let idToken = signInResult?.idToken;
      if (!idToken) {
        throw new Error('No ID token found');
      }

      const googleCredential = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(getAuth(), googleCredential);
      showToast('Login Successful');
    } catch (error) {
      console.error('❌ Google sign-in failed:', error);
      showToast('Google sign-in failed');
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

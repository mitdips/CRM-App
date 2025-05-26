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
import Toast from '../../atoms/Toast';
import {setUserData} from '../../../redux/slices/AuthSlice';
import {useDispatch} from 'react-redux';
import {COLORS} from '../../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginForm = ({navigation, route}) => {
  const [remember, setRemember] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const styles = useStyle();
  const dispatch = useDispatch();

  const showToast = message => {
    setToastMessage(message);
    setToastVisible(true);
  };

  // Check for registration success message
  useEffect(() => {
    if (route?.params?.registrationSuccess) {
      setToastMessage('Account Created Successfully');
      setToastVisible(true);
      // Clear the parameter after showing toast
      navigation.setParams({registrationSuccess: null});
    }
  }, [route?.params?.registrationSuccess]);

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

      // Extract user data
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

      // Dispatch user data to Redux store
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
      // No need to dispatch here as StackNavigator will handle it
      showToast('Login Successful');
    } catch (error) {
      console.error('❌ Google sign-in failed:', error);
      showToast('Google sign-in failed');
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <>
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
            <RememberForgot
              remember={remember}
              onCheckboxPress={() => setRemember(!remember)}
              onForgotPasswordPress={() =>
                navigation.navigate('ForgotPassword')
              }
            />
            <Button
              postfixLogo={
                <Ionicons name="arrow-forward" size={20} color="white" />
              }
              onPress={handleSubmit}
              loading={isSubmitting}
              title="Sign in"
            />
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.dividerLine} />
            </View>
            <Button
              title="Sign in with Google"
              bgColor={COLORS.google}
              onPress={handleGoogleSignIn}
              loading={googleLoading}
              disabled={googleLoading}
              prefixLogo={
                <MaterialCommunityIcons
                  name="google"
                  size={20}
                  color={COLORS.white}
                />
              }
            />
          </View>
        )}
      </Formik>

      <Toast
        visible={toastVisible}
        onDismiss={() => setToastVisible(false)}
        message={toastMessage}
      />
    </>
  );
};

export default LoginForm;

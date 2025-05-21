import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useState} from 'react';
import {View, Alert} from 'react-native';
import {Formik} from 'formik';
import PasswordField from '../../molecules/PasswordFields';
import RememberForgot from '../../molecules/RememberForget';
import {useStyle} from './style';
import {loginValidationSchema} from '../../../utils/validationSchema';
import GoogleButton from '../../molecules/GoogleButton';
import Text from '../../atoms/Text';
import EmailField from '../../molecules/EmailField';
import Button from '../../molecules/Button';

const LoginForm = ({navigation}) => {
  const styles = useStyle();
  const [remember, setRemember] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
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
      Alert.alert('Success', 'Login successful!');
      const user = userCredential.user;
      console.log('Logged in user:', user.email);
    } catch (error) {
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
      Alert.alert('Error', errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setGoogleLoading(true);
      console.log('Checking if device has Google Play Services...');
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      console.log('Google Play Services available.');
      console.log('Starting Google sign-in...');
      const signInResult = await GoogleSignin.signIn();
      console.log('Sign-in result:', signInResult);
      let idToken = signInResult?.data?.idToken;
      if (!idToken) {
        console.log('Falling back to old idToken structure...');
        idToken = signInResult?.idToken;
      }
      if (!idToken) {
        console.error('❌ No ID token found in Google sign-in result');
        throw new Error('No ID token found');
      }
      console.log('ID Token retrieved:', idToken);
      const googleCredential = GoogleAuthProvider.credential(idToken);
      console.log('Google credential created:', googleCredential);
      const authResult = await signInWithCredential(
        getAuth(),
        googleCredential,
      );
      console.log('✅ Firebase sign-in successful:', authResult);
      return authResult;
    } catch (error) {
      console.error('❌ Google sign-in failed:', error);
      throw error;
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

          <RememberForgot
            remember={remember}
            onCheckboxPress={() => setRemember(!remember)}
            onForgotPasswordPress={() => navigation.navigate('ForgotPassword')}
          />

          <Button
            postfixLogo
            onPress={handleSubmit}
            loading={isSubmitting}
            title="Sign In"
          />
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>
          <GoogleButton
            onPress={handleGoogleSignIn}
            loading={googleLoading}
            disabled={googleLoading}
          />
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;

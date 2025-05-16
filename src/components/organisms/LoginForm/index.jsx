import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useState} from 'react';
import {View, Alert} from 'react-native';
import {Formik} from 'formik';
import PasswordField from '../../molecules/PasswordFields';
import RememberForgot from '../../molecules/RememberForget';
import {useStyle} from './style';
import {loginValidationSchema} from '../../../utils/validationSchema';
import GoogleButton from '../../molecules/GoogleButton';
import GithubButton from '../../molecules/GithubButton';
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
      // Attempt to sign in with email and password
      const userCredential = await auth().signInWithEmailAndPassword(
        values.email,
        values.password,
      );

      // Show success message
      Alert.alert('Success', 'Login successful!');

      // You can access user info if needed
      const user = userCredential.user;
      console.log('Logged in user:', user.email);

      // Navigate to your main app screen
      // navigation.navigate('Home');
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
      console.log('Starting Google Sign-In');

      await GoogleSignin.hasPlayServices();
      console.log('Play services available');

      const {idToken} = await GoogleSignin.signIn();
      console.log('Google sign-in success, idToken:', idToken);

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );

      console.log('Firebase sign-in success:', userCredential.user.email);
      Alert.alert('Success', 'Google Sign-In successful!');
      // navigation.navigate('Home');
    } catch (error) {
      console.log('Google Sign-In error:', error);
      let errorMessage = 'Google Sign-In failed';

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        errorMessage = 'Sign in cancelled';
      } else if (error.code === statusCodes.IN_PROGRESS) {
        errorMessage = 'Sign in already in progress';
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        errorMessage = 'Play services not available';
      } else if (error.message) {
        errorMessage = error.message;
      }

      Alert.alert('Error', errorMessage);
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
          <GithubButton />
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;

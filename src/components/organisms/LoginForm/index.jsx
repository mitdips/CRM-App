import {
  auth,
  getAuth,
  signInWithCredential,
  GithubAuthProvider,
} from '@react-native-firebase/auth';
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
import {
  getAuth,
  signInWithPopup,
  linkWithPopup,
  OAuthProvider,
} from '@react-native-firebase/auth';
const LoginForm = ({navigation}) => {
  const styles = useStyle();
  const [remember, setRemember] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [State, setState] = useState(null);
  const [githubLoading, setGithubLoading] = useState(false);
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
  async function signInWithGitHub(accessToken) {
    try {
      const credential = GithubAuthProvider.credential(accessToken);
      const userCredential = await signInWithCredential(getAuth(), credential);
      // Handle successful sign-in (e.g., navigate to the app's main screen)
      console.log('User signed in with GitHub!', userCredential.user);
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.log('GitHub sign-in error:', error);
    }
  }
  const handleGoogleSignIn = async () => {
    try {
      console.log('Step 1: Starting Google Sign-In process');
      console.log('Step 2: Checking Play Services availability');
      await GoogleSignin.hasPlayServices();
      console.log('Step 3: Play Services check successful');
      console.log('Step 4: Initiating Google Sign-In');
      const response = await GoogleSignin.signIn();
      console.log('Step 5: Google Sign-In response received:', response);
      if (isSuccessResponse(response)) {
        console.log('Step 6: Sign-In successful, updating user info');
        setState({userInfo: response.data});
        console.log('Step 7: User info updated successfully');
      } else {
        console.log('Step 6: Sign-In was cancelled by user');
      }
    } catch (error) {
      console.log('Error occurred during Google Sign-In:', error);
      if (isErrorWithCode(error)) {
        console.log('Error code:', error.code);
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            console.log('Step X: Operation already in progress');
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log('Step X: Play Services not available or outdated');
            break;
          default:
            console.log('Step X: Other Google Sign-In error occurred');
        }
      } else {
        console.log('Step X: Non-Google Sign-In related error occurred');
      }
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
          <GithubButton
            onPress={signInWithGitHub}
            loading={githubLoading}
            disabled={githubLoading}
          />
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;

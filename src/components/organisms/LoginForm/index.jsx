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
import GithubButton from '../../molecules/GithubButton';
import Text from '../../atoms/Text';
import EmailField from '../../molecules/EmailField';
import Button from '../../molecules/Button';

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

  const handleGoogleSignIn = async () => {
    try {
      setGoogleLoading(true);
      console.log('Checking if device has Google Play Services...');
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      console.log('Google Play Services available.');
      console.log('Starting Google sign-in...');
      const signInResult = await GoogleSignin.signIn();
      console.log('Sign-in result:', signInResult);
      // Try new result structure (v13+)
      let idToken = signInResult?.data?.idToken;
      // Fallback for older versions
      if (!idToken) {
        console.log('Falling back to old idToken structure...');
        idToken = signInResult?.idToken;
      }
      if (!idToken) {
        console.error('❌ No ID token found in Google sign-in result');
        throw new Error('No ID token found');
      }
      console.log('ID Token retrieved:', idToken);
      // Create a Google credential with the token
      const googleCredential = GoogleAuthProvider.credential(idToken);
      console.log('Google credential created:', googleCredential);
      // Sign in with the credential
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

  const handleGithubSignIn = async () => {
    try {
      setGithubLoading(true);
      console.log('Step 1: Starting GitHub Sign-In');
      // Create a new OAuth provider for GitHub
      const provider = new OAuthProvider('github.com');
      const auth = getAuth();
      linkWithPopup(auth.currentUser, provider);

      console.log('Step 2: Initiating GitHub Sign-In');
      // const result = await auth().signInWithProvider(provider);
      const result = await auth().signInWithCredential(provider);
      console.log('Step 3: GitHub Sign-In successful');
      const credential = OAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      const idToken = credential.idToken;
      const user = result.user;

      console.log('Step 4: User info received');
      console.log('Access Token:', accessToken);
      console.log('ID Token:', idToken);
      console.log('GitHub User:', user.email);

      Alert.alert('Success', 'GitHub Sign-In successful!');
      // Navigation will be handled automatically by the StackNavigator
      // based on the auth state change
    } catch (error) {
      console.log('GitHub Sign-In error:', error);
      let errorMessage = 'GitHub Sign-In failed';

      switch (error.code) {
        case 'auth/account-exists-with-different-credential':
          errorMessage =
            'An account already exists with the same email address but different sign-in credentials';
          break;
        case 'auth/popup-closed-by-user':
          errorMessage = 'Sign-in was cancelled';
          break;
        case 'auth/popup-blocked':
          errorMessage = 'Sign-in popup was blocked by the browser';
          break;
        case 'auth/cancelled-popup-request':
          errorMessage = 'Sign-in was cancelled';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error occurred';
          break;
        default:
          errorMessage = error.message || 'An unknown error occurred';
      }

      Alert.alert('Error', errorMessage);
    } finally {
      setGithubLoading(false);
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
            onPress={handleGithubSignIn}
            loading={githubLoading}
            disabled={githubLoading}
          />
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;

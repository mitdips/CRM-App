import {useEffect} from 'react';
import {View} from 'react-native';
import Text from './src/components/atoms/Text';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import ForgotPasswordScreen from './src/screens/ForgetPasswordScreen';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '522112965987-tfsn8g92gapsopsmfb0dv4fogm4vuffv.apps.googleusercontent.com',
    });
  }, []);
  // useEffect(() => {
  //   logoutTemp();
  // }, []);
  const logoutTemp = async () => {
    try {
      await auth().signOut();
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Text>CRM App</Text> */}
      {/* <RegistrationScreen /> */}
      <LoginScreen />
      {/* <ForgotPasswordScreen /> */}
    </View>
  );
};

export default App;

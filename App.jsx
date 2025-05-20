import {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import StackNavigator from './src/navigations/StackNavigation';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '522112965987-tfsn8g92gapsopsmfb0dv4fogm4vuffv.apps.googleusercontent.com',
    });
  }, []);

  return <StackNavigator />;
};

export default App;

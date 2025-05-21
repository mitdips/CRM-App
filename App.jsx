import {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import StackNavigator from './src/navigations/StackNavigation';
import useTemporarySignOut from './useTemporarySignOut';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '522112965987-tldhg24l07j2eoqqe9jpdeo5phdt98ss.apps.googleusercontent.com',
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });
  }, []);
  // useTemporarySignOut();

  return <StackNavigator />;
};
export default App;

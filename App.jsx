import {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import StackNavigator from './src/navigations/StackNavigation';
import SplashScreen from 'react-native-splash-screen';
// import useTemporarySignOut from './useTemporarySignOut';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    GoogleSignin.configure({
      webClientId:
        "522112965987-mc0pde2338nq7q75ks03v6pjt2svrqmi.apps.googleusercontent.com",
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });
  }, []);
  // useTemporarySignOut();

  return <StackNavigator />;
};
export default App;

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import StackNavigator from './src/navigations/StackNavigation';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as PaperProvider} from 'react-native-paper';
import Project from './src/components/organisms/ProjectForm';

const App = () => {
  SplashScreen.hide();
  GoogleSignin.configure({
    webClientId:
      '522112965987-mc0pde2338nq7q75ks03v6pjt2svrqmi.apps.googleusercontent.com',
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <Project/>
          {/* <StackNavigator /> */}
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;



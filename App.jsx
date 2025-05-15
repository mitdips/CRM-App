import {Platform, View} from 'react-native';
import Text from './src/components/atoms/Text';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
const App = () => {

  return (
    useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }
  , []),
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>CRM App</Text>
    </View>
  );
};

export default App;

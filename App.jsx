import {View} from 'react-native';
import Text from './src/components/atoms/Text';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>CRM App</Text>
    </View>
  );
};
export default App;

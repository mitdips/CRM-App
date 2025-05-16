import {View} from 'react-native';
import Text from './src/components/atoms/Text/index.jsx';
import LoginScreen from './src/screens/LoginScreens';
import RegistrationScreen from './src/screens/RegistrationScreen/index.jsx';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>CRM App</Text>
    </View>
  );
};

export default App;

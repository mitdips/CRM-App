import {View} from 'react-native';
import Text from './src/components/atoms/Text';
import FirstnameField from './src/components/molecules/FirstnameFields';
import LastnameField from './src/components/molecules/LastnameFields';

import RegistrationScreen from './src/screens/RegistrationScreen/index.jsx';


const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
<RegistrationScreen/>
    </View>
  );
};

export default App;

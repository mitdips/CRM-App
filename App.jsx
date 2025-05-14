import {View} from 'react-native';
import Text from './src/components/atoms/Text';
import AuthTemplate from './src/components/templates/AuthTemplate';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Text>CRM App</Text> */}
      <AuthTemplate />
    </View>
  );
};

export default App;

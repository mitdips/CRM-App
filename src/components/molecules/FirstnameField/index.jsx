import { View } from 'react-native';
import Input from '../../atoms/Input';
import Text from '../../atoms/Text';

const FirstnameField = ({value, onChangeText, error, styleInput, styleText}) => {
  return (
    <View>
      <Text style={styleText}>Firstname</Text>
      <Input
        style={styleInput}
        placeholder="Enter your firstname"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        error={error}

      />
    </View>
  );
};
export default FirstnameField;
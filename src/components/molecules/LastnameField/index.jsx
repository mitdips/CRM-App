import { View } from 'react-native';
import Input from '../../atoms/Input';
import Text from '../../atoms/Text';

const LastnameField = ({value, onChangeText, error, styleInput, styleText}) => {
  return (
    <View>
      <Text style={styleText}>Lastname</Text>
      <Input
        style={styleInput}
        placeholder="Enter your lastname"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        error={error}

      />
    </View>
  );
};
export default LastnameField;
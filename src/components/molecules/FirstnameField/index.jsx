import { View } from 'react-native';
import Input from '../../atoms/Input';
import Text from '../../atoms/Text';

const FirstnameField = ({value, onChangeText, error, styleInput, styleText}) => {
  return (
      <Input
        style={styleInput}
        placeholder="Firstname"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        error={error}
      />
  );
};
export default FirstnameField;
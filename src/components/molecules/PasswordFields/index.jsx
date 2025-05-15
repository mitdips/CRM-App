import {StyleSheet, View} from 'react-native';
import Input from '../../atoms/Input';
import Text from '../../atoms/Text';
import {scale} from 'react-native-size-matters';
import {COLORS} from '../../../utils/colors';

const PasswordField = ({value, onChangeText, error, styleInput, placeholder}) => {
  return (
    <Input
      style={styleInput}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      isPassword={true}
      error={error}
    />
  );
};

export default PasswordField;

const Styles = StyleSheet.create({
  passwordText: {
    alignSelf: 'flex-start',
    fontSize: scale(14),
    fontWeight: 400,
    color: COLORS.gray,
  },
});

import {scale} from 'react-native-size-matters';
import Input from '../../atoms/Input';
import Text from '../../atoms/Text';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../../utils/colors';

const EmailField = ({value, onChangeText, error, style}) => {
  return (
    <View>
      <Text style={Styles.emailText}>Email Address</Text>
      <Input
        style={style}
        placeholder="youremail@gmail.com"
        value={value}
        onChangeText={onChangeText}
        keyboardType="email-address"
        autoCapitalize="none"
        error={error}
      />
    </View>
  );
};

export default EmailField;

const Styles = StyleSheet.create({
  emailText: {
    alignSelf: 'flex-start',
    fontSize: scale(14),
    fontWeight: 400,
    color: COLORS.gray,
  },
});

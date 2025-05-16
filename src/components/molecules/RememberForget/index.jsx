import {View, Pressable} from 'react-native';
import Text from '../../atoms/Text';
import {Checkbox} from 'react-native-paper';
import {COLORS} from '../../../utils/colors';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const RememberForgot = ({remember, onCheckboxPress, onForgotPasswordPress}) => {
  return (
    <View style={Styles.rememberForgotView}>
      <Checkbox.Item
        style={Styles.checkbox}
        position="leading"
        label="Remember me"
        labelStyle={{
          color: COLORS.gray,
          fontSize: scale(14),
          fontFamily: 'WinkyRough-Regular',
        }}
        status={remember ? 'checked' : 'unchecked'}
        onPress={onCheckboxPress}
      />
      <Pressable onPress={onForgotPasswordPress}>
        <Text style={Styles.forgotpassText}>Forgot Password?</Text>
      </Pressable>
    </View>
  );
};

export default RememberForgot;

const Styles = StyleSheet.create({
  rememberForgotView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotpassText: {
    color: COLORS.gray,
    fontSize: scale(14),
  },
  checkbox: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});

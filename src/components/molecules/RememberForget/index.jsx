import {View, Pressable} from 'react-native';
import Text from '../../atoms/Text';
import {Checkbox} from 'react-native-paper';
import {COLORS} from '../../../utils/colors';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const RememberForgot = ({remember, onCheckboxPress}) => {
  const navigation = useNavigation();
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
        color={COLORS.primary}
      />
      <Pressable
        onPress={() => navigation.navigate('ForgotPassword')}
        style={({pressed}) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
        ]}>
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

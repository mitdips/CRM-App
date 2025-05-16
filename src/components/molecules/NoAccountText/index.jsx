import Text from '../../atoms/Text';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {scale} from 'react-native-size-matters';

const NoAccountText = () => {
  return <Text style={styles.text}>Don't have an account?</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: scale(16),
    color: COLORS.primary,
    textAlign: 'center',
  },
});

export default NoAccountText;

import {StyleSheet} from 'react-native';
import {width} from '../../../utils/helper';
import { COLORS } from '../../../utils/colors';
import { scale } from 'react-native-size-matters';

export const useStyle = () => {
  return StyleSheet.create({
    formContainer: {
      width: '100%',
      gap: width * 0.04,
    },
    dividerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: COLORS.gray,
    },
    dividerText: {
      paddingHorizontal: width * 0.03,
      color: COLORS.gray,
      fontSize: scale(16),
    },
  });
};

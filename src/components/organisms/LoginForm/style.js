import {StyleSheet} from 'react-native';
import { COLORS } from '../../../utils/colors';
import { scale } from 'react-native-size-matters';

export const useStyle = () => {
  return StyleSheet.create({
    formContainer: {
      width: '100%',
      // gap: scale(14),
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
      paddingHorizontal: scale(10),
      color: COLORS.gray,
      fontSize: scale(16),
    },
  });
};

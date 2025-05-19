import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import { scale } from 'react-native-size-matters';
export const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: scale(16),
      backgroundColor: COLORS.secondary,
      width: '100%',
    },
    innerContainer: {
      paddingHorizontal: scale(16),
      paddingVertical: scale(16),
      backgroundColor: COLORS.white,
      borderRadius: 15,
      gap: scale(16),
    },
  });
};

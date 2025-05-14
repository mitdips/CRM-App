import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {width} from '../../../utils/helper';
export const useStyle = () => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: width * 0.04,
      backgroundColor: COLORS.secondary,
      width: '100%',
      height: '100%',
    },
    innerContainer: {
      paddingHorizontal: width * 0.04,
      paddingVertical: width * 0.045,
      backgroundColor: COLORS.white,
      borderRadius: 20,
      gap: width * 0.045,
    },
  });
};

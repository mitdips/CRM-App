import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
export const useStyle = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: COLORS.secondary,
      width: '100%',
      height: '100%',
    },
  });
};

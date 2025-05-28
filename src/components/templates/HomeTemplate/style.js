import {StyleSheet} from 'react-native';
import { COLORS } from '../../../utils/colors';
import { scale } from 'react-native-size-matters';
export const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.secondary,
      paddingHorizontal: scale(6),
    },
  });
};

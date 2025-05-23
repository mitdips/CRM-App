import {StyleSheet} from 'react-native';
import {width} from '../../../utils/helper';
import { scale } from 'react-native-size-matters';
import {COLORS} from '../../../utils/colors';

export const useStyle = () => {
  return StyleSheet.create({
    formContainer: {
      width: '100%',
    },
    text: {
      fontSize: scale(14),
      color: COLORS.primary,
      textAlign: 'center',
      marginTop: scale(10),
    },
    
  });
};
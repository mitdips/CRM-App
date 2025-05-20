import {StyleSheet} from 'react-native';
import {width} from '../../../utils/helper';
import { scale } from 'react-native-size-matters';

export const useStyle = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
    },
    backButton: {
      alignSelf: 'flex-start',
      marginTop: scale(10),
    },
    formContainer: {
      width: '100%',
      gap: scale(10),
    },
  });
};

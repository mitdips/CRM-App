import {StyleSheet} from 'react-native';
import {width} from '../../../utils/helper';

export const useStyle = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
    },
    backButton: {
      alignSelf: 'flex-start',
      marginBottom: width * 0.04,
    },
    formContainer: {
      width: '100%',
      gap: width * 0.04,
    },
  });
};

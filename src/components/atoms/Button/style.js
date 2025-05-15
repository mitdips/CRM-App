import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { width } from '../../../utils/helper';
import { COLORS } from '../../../utils/colors';

export const useStyle = () => {
  return StyleSheet.create({
    btnContainer: {
      width: '100%',
      paddingVertical: width * 0.03,
      alignSelf: 'center',
      borderRadius: 15,
      elevation: 2,
    },
    btnText: {
      fontSize: scale(14),
      fontWeight: '500',
      textAlign: 'center',
    },
    buttonRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 8,
    },
  });
};

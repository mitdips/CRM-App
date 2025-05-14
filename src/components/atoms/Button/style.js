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
    prefixLogo: {
      width: width * 0.05,
      height: width * 0.05,
      resizeMode: 'contain',
    },
    postfixLogo: {
      width: width * 0.045,
      height: width * 0.045,
      resizeMode: 'contain',
      tintColor: COLORS.white,
    },
    buttonRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 8,
    },
  });
};

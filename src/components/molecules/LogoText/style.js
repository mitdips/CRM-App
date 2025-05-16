import {StyleSheet} from 'react-native';
import {width} from '../../../utils/helper';
import {COLORS} from '../../../utils/colors';
import {scale} from 'react-native-size-matters';
export const useStyle = () => {
  return StyleSheet.create({
    logoView: {
      height: '20%',
      backgroundColor: COLORS.secondary,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: width * 0.05,
    },
    logo: {
      width: width * 0.13,
      height: width * 0.13,
      resizeMode: 'contain',
    },
    logoText: {
      fontSize: scale(20),
      fontWeight: '700',
      color: COLORS.primary,
    },
  });
};

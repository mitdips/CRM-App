import {StyleSheet} from 'react-native';
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
      gap: scale(14),
    },
    logo: {
      width: scale(45),
      height: scale(45),
      resizeMode: 'contain',
    },
    logoText: {
      fontSize: scale(20),
      fontWeight: '700',
      color: COLORS.primary,
    },
  });
};

import {StyleSheet} from 'react-native';
import { COLORS } from '../../../utils/colors';
import { scale } from 'react-native-size-matters';

export const useStyle = () => {
  return StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: scale(15),
        backgroundColor: COLORS.white,
        borderRadius: scale(16),
        marginVertical: scale(10),
      },
      logo: {
        width: scale(35),
        height: scale(35),
        borderRadius: scale(12),
        backgroundColor: COLORS.primary,
      },
      iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(20),
      },
      profile: {
        width: scale(30),
        height: scale(30),
      },
  });
};
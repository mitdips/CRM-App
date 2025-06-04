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
        borderRadius: scale(15),
        marginVertical: scale(10),
      },
      logo: {
        width: scale(40),
        height: scale(40),
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
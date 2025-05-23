import {StyleSheet} from 'react-native';
import { COLORS } from '../../../utils/colors';
import { scale } from 'react-native-size-matters';

export const useStyle = () => {
  return StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: COLORS.white,
        borderRadius: 16,
       
      },
      logo: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: COLORS.primary,
      },
      iconRow: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      iconButton: {
        marginHorizontal: 8,
      },
      profile: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginLeft: 8,
      },
  });
};
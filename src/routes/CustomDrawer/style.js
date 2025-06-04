import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {COLORS} from '../../utils/colors';
export const useStyle = () => {
  return StyleSheet.create({
    headerContainer: {
      paddingVertical: scale(10),
      paddingHorizontal: scale(15),
      alignItems: 'flex-start',
      marginBottom: scale(10),
    },
    logo: {
      width: scale(40),
      height: scale(40),
    },
    drawerItemsContainer: {
      flex: 1,
      paddingHorizontal: scale(10),
    },
    drawerItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: scale(10),
      paddingHorizontal: scale(15),
      borderRadius: scale(15),
    },
    drawerItemActive: {
      backgroundColor: COLORS.secondary,
    },
    drawerLabel: {
      fontSize: scale(14),
      marginLeft: scale(10),
      color: COLORS.gray,
    },
    drawerLabelActive: {
      color: COLORS.primary,
    },
    activeItemIndicator: {
      position: 'absolute',
      right: 0,
      top: scale(8),
      bottom: scale(8),
      width: scale(4),
      backgroundColor: COLORS.secondary,
      borderTopLeftRadius: scale(4),
      borderBottomLeftRadius: scale(4),
    },
    bottomSection: {
      paddingHorizontal: scale(10),
      paddingVertical: scale(10),
      borderTopWidth: 1,
      borderTopColor: COLORS.gray,
    },
    logoutButtonStyle: {
      paddingVertical: scale(10),
      paddingHorizontal: scale(5),
    },
  });
};

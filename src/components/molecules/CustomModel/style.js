import {COLORS} from '../../../utils/colors';
import {scale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import {width, height} from '../../../utils/helper';
export const useStyle = () => {
  return StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
      width: width * 0.9,
      minHeight: height * 0.65,
      backgroundColor: COLORS.white,
      borderRadius: scale(20),
      paddingVertical: scale(10),
      paddingHorizontal: scale(10),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: scale(5),
      marginVertical: scale(10),
    },
    titleText: {
      fontSize: scale(18),
      fontWeight: 'bold',
      color: COLORS.textDark,
    },
    closeButtonNoTitle: {
      position: 'absolute',
      top: scale(15),
      right: scale(15),
      zIndex: 1,
    },
    modalContent: {
      flex: 1,
    },
  });
};

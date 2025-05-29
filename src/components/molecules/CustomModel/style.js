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
      flex: 1,
      backgroundColor: COLORS.white,
      borderRadius: scale(20),
      paddingVertical: scale(20),
      paddingHorizontal: scale(15),
      width: width * 0.9,
      maxHeight: height * 0.9,
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
    },
    titleText: {
      fontSize: scale(18),
      fontWeight: 'bold',
      color: COLORS.textDark,
    },
    closeButton: {
      padding: scale(5),
    },
    closeButtonNoTitle: {
      position: 'absolute',
      top: scale(10),
      right: scale(10),
      zIndex: 1,
    },
    modalContent: {
      // paddingHorizontal: scale(5), // Content alignment
    },
  });
};

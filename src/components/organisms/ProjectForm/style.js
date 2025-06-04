import {StyleSheet, Platform} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../../utils/colors';

export const useStyle = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
    },
    contentContainer: {
      gap: scale(10),
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 24,
      color: COLORS.black,
      textAlign: 'left',
    },
    label: {
      fontSize: scale(13),
      color: COLORS.textDark,
      marginBottom: verticalScale(6),
      marginTop: verticalScale(12),
    },
    input: {
      marginBottom: 8,
    },
    textArea: {
      minHeight: 80,
      marginBottom: 16,
      textAlignVertical: 'top',
    },
    button: {
      marginTop: 20,
      borderRadius: scale(15),
    },
    dropdown: {
      borderWidth: 1,
      borderRadius: scale(10),
      marginBottom: verticalScale(12),
    },
    dropdownContainer: {
      borderWidth: 1,
      borderRadius: scale(10),
    },
    placeholder: {
      color: COLORS.darkGray,
      fontSize: scale(14),
    },
    pickerTextStyle: {
      fontSize: scale(14),
      fontFamily: 'WinkyRough-Regular',
      color: COLORS.darkGray,
    },
    dropdownItemLabelStyle: {
      fontSize: scale(14),
      fontFamily: 'WinkyRough-Regular',
      textAlign: 'left',
      color: COLORS.darkGray,
    },
    dropdownItem: {
      fontSize: scale(16),
      color: COLORS.darkGray,
    },
    pickerContainer: {
      borderColor: COLORS.border,
      borderWidth: 1,
      borderRadius: scale(15),
      marginBottom: verticalScale(5),
      justifyContent: 'center',
      height: verticalScale(45),
    },
    errorText: {
      fontSize: moderateScale(10),
      color: COLORS.danger,
      marginTop: verticalScale(2),
      marginBottom: verticalScale(10),
    },
    descriptionInput: {
      height: verticalScale(100),
      paddingTop: verticalScale(10),
    },
    attachmentButtonsContainer: {
      flexDirection: 'row',
      marginTop: verticalScale(15),
      marginBottom: verticalScale(20),
    },
    iconButton: {
      paddingHorizontal: moderateScale(10),
      paddingVertical: verticalScale(8),
      marginRight: moderateScale(10),
      backgroundColor: COLORS.secondary,
      borderRadius: scale(15),
    },
  });
};

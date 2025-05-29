import {StyleSheet, Platform} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../../utils/colors';

export const useStyle = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 24,
      color: COLORS.black,
      textAlign: 'left',
    },
    label: {
      fontSize: moderateScale(13),
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
      borderRadius: 8,
    },
    dropdown: {
      backgroundColor: '#fff',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: COLORS.gray,
      marginBottom: 8,
      marginTop: -8,
      zIndex: 10,
      position: 'absolute',
      width: '100%',
      left: 0,
    },
    dropdownItem: {
      padding: 12,
      fontSize: 16,
      color: COLORS.black,
    },
    pickerContainer: {
      borderColor: COLORS.border,
      borderWidth: 1,
      borderRadius: moderateScale(8),
      marginBottom: verticalScale(5),
      backgroundColor: COLORS.inputBackground || COLORS.white,
      justifyContent: 'center',
      height: Platform.OS === 'ios' ? verticalScale(45) : verticalScale(50),
    },
    picker: {
      width: '100%',
      height: '100%',
      color: COLORS.textDark,
      ...(Platform.OS === 'android' && {}),
    },
    errorText: {
      fontSize: moderateScale(10),
      color: COLORS.danger,
      marginTop: verticalScale(2),
      marginBottom: verticalScale(5),
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
      backgroundColor: COLORS.lightGray,
      borderRadius: moderateScale(8),
      borderWidth: 0,
    },
    saveButton: {
      marginTop: verticalScale(15),
    },
  });
};

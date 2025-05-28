import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';

export const useStyle = () => {
  return StyleSheet.create({
    outerContainer: {
      flex: 1,
      backgroundColor: '#f5f6fa',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      width: '90%',
      backgroundColor: '#fff',
      borderRadius: 16,
      padding: 24,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 4,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 24,
      color: COLORS.black,
      textAlign: 'left',
    },
    label: {
      fontSize: 14,
      color: COLORS.gray,
      marginBottom: 6,
      marginTop: 8,
      fontWeight: '500',
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
  });
}

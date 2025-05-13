import {Dimensions} from 'react-native';

export const height = Dimensions.get('screen').height;
export const width = Dimensions.get('screen').width;

export const FONTS = {
  black: 'WinkyRough-Black',
  blackItalic: 'WinkyRough-BlackItalic',
  bold: 'WinkyRough-Bold',
  boldItalic: 'WinkyRough-BoldItalic',
  extraBold: 'WinkyRough-ExtraBold',
  extraBoldItalic: 'WinkyRough-ExtraBoldItalic',
  italic: 'WinkyRough-Italic',
  light: 'WinkyRough-Light',
  lightItalic: 'WinkyRough-LightItalic',
  medium: 'WinkyRough-Medium',
  mediumItalic: 'WinkyRough-MediumItalic',
  regular: 'WinkyRough-Regular',
  semiBold: 'WinkyRough-SemiBold',
  semiBoldItalic: 'WinkyRough-SemiBoldItalic',
};

export const getFontFamily = () => {
    switch (type.toLowerCase()) {
      case 'black':
        return FONTS.black;
      case 'blackitalic':
        return FONTS.blackItalic;
      case 'light':
        return FONTS.light;
      case 'lightitalic':
        return FONTS.lightItalic;
      case 'medium':
        return FONTS.medium;
      case 'mediumitalic':
        return FONTS.mediumItalic;
      case 'semibold':
        return FONTS.semiBold;
      case 'semibolditalic':
        return FONTS.semiBoldItalic;
      case 'bold':
        return FONTS.bold;
      case 'bolditalic':
        return FONTS.boldItalic;
      case 'extrabold':
        return FONTS.extraBold;
      case 'extrabolditalic':
        return FONTS.extraBoldItalic;
      case 'italic':
        return FONTS.italic;
      default:
        return FONTS.regular;
    }
  };
import {Text} from 'react-native';

const CustomText = ({children, style, numberOfLines, onPress}) => {
  return (
    <Text
      style={[
        {
          fontFamily: 'WinkyRough-Regular',
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      onPress={onPress}>
      {children}
    </Text>
  );
};

export default CustomText;

import {Text as RNText} from 'react-native';

const Text = ({children, style, numberOfLines, onPress}) => {
  return (
    <RNText
      style={[
        {
          fontFamily: 'WinkyRough-Regular',
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      onPress={onPress}>
      {children}
    </RNText>
  );
};

export default Text;


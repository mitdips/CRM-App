import React from 'react';
import Text from '../../atoms/Text';
import { COLORS } from '../../../utils/colors';
import { scale } from 'react-native-size-matters';

const SignInHeading = () => {
  return (
    <Text
      style={{
        fontSize: scale(18),
        fontWeight: 600,
        textAlign: 'center',
        color: COLORS.black,
      }}>
      Sign In to Woorkroom
    </Text>
  );
};

export default SignInHeading;

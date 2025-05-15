import Text from '../../atoms/Text';
import {COLORS} from '../../../utils/colors';
import {scale} from 'react-native-size-matters';

const SignUpHeading = () => {
  return (
    <Text
      style={{
        fontSize: scale(18),
        fontWeight: 600,
        textAlign: 'center',
        color: COLORS.primary,
      }}>
      Sign Up to Woorkroom
    </Text>
  );
};

export default SignUpHeading;
import Text from '../../atoms/Text';
import {COLORS} from '../../../utils/colors';
import {scale} from 'react-native-size-matters';

const Heading = ({heading}) => {
  return (
    <Text
      style={{
        fontSize: scale(18),
        fontWeight: 600,
        textAlign: 'center',
        color: COLORS.primary,
      }}>
   {heading}
    </Text>
  );
};

export default Heading;

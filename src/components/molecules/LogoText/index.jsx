import {Image, View} from 'react-native';
import {IMAGES} from '../../../assets';
import {useStyle} from './style';
import Text from '../../atoms/Text';
const styles = useStyle();
const LogoText = () => {
  return (
    <View style={styles.logoView}>
      <Image source={IMAGES.logo} style={styles.logo} />
      <Text style={styles.logoText}>Woorkroom</Text>
    </View>
  );
};
export default LogoText;

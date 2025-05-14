import {View} from 'react-native';
import {useStyle} from './style';
import LogoText from '../../molecules/LogoText';
const styles = useStyle();
 
const AuthTemplate = ({children}) => {
  return (
    <View style={styles.container}>
      <LogoText />
      <View style={styles.innerContainer}>{children}</View>
    </View>
  );
};
export default AuthTemplate;
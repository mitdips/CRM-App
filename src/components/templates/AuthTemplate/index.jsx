import {View} from 'react-native';
import {useStyle} from './style';
import LogoText from '../../molecules/LogoText';
const styles = useStyle();

const AuthTemplate = ({children}) => {
  return (
    <View style={styles.container}>
      <LogoText />
      {children}
    </View>
  );
};
export default AuthTemplate;

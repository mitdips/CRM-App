import {View} from 'react-native';
import {useStyle} from './style';
import Header from '../../organisms/Header';

const styles = useStyle();

const HomeTemplate = ({children}) => {
  return (
    <View style={styles.container}>
      <Header />
      {children}
    </View>
  );
};
export default HomeTemplate;
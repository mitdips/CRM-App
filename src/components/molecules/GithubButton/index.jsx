import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {scale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {width} from '../../../utils/helper';

const GithubButton = ({onPress, loading}) => {
  return (
    <Button
      mode="contained"
      icon={() => (
        <MaterialCommunityIcons name="github" size={20} color="#fff" />
      )}
      onPress={onPress}
      loading={loading}
      disabled={loading}
      style={[styles.button, {backgroundColor: '#333'}]}
      labelStyle={styles.label}>
      Sign in with GitHub
    </Button>
  );
};

export default GithubButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    paddingVertical: width * 0.01,
  },
  label: {
    color: '#fff',
    fontSize: scale(12),
  },
});

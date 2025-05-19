import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {scale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const GoogleButton = ({onPress, loading}) => {
  return (
    <Button
      mode="contained"
      icon={() => (
        <MaterialCommunityIcons
          name="google"
          size={20}
          color={loading ? '#rgba(255,255,255,0.5)' : '#fff'}
        />
      )}
      onPress={onPress}
      loading={loading}
      disabled={loading}
      style={[
        styles.button,
        {
          backgroundColor: loading ? '#ff443380' : '#FF4433',
          opacity: loading ? 0.8 : 1,
        },
      ]}
      labelStyle={[
        styles.label,
        {color: loading ? '#rgba(255,255,255,0.5)' : '#fff'},
      ]}>
      Sign in with Google
    </Button>
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    paddingVertical: scale(4),
  },
  label: {
    color: '#fff',
    fontSize: scale(12),
  },
});

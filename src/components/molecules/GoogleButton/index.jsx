import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {scale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {width} from '../../../utils/helper';
import {COLORS} from '../../../utils/colors';

const GoogleButton = ({onPress, loading}) => {
  return (
    <Button
      mode="contained"
      icon={() => (
        <MaterialCommunityIcons
          name="google"
          size={20}
          color={loading ? COLORS.white50 : COLORS.white}
        />
      )}
      onPress={onPress}
      loading={loading}
      disabled={loading}
      style={[
        styles.button,
        {
          backgroundColor: loading ? COLORS.googleLoadingBg : COLORS.google,
          opacity: loading ? 0.8 : 1,
        },
      ]}
      labelStyle={[
        styles.label,
        {color: loading ? COLORS.white50 : COLORS.white},
      ]}>
      Sign in with Google
    </Button>
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    paddingVertical: width * 0.01,
  },
  label: {
    color: COLORS.white,
    fontSize: scale(12),
  },
});

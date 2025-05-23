import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {scale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../../utils/colors';

const GithubButton = ({onPress, loading, disabled}) => {
  return (
    <Button
      mode="contained"
      icon={() => (
        <MaterialCommunityIcons
          name="github"
          size={20}
          color={loading ? COLORS.white50 : COLORS.white}
        />
      )}
      onPress={onPress}
      loading={loading}
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: loading ? COLORS.githubLoadingBg : COLORS.github,
          opacity: loading ? 0.8 : 1,
        },
      ]}
      labelStyle={[
        styles.label,
        {color: loading ? COLORS.white50 : COLORS.white},
      ]}>
      Sign in with GitHub
    </Button>
  );
};

export default GithubButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    paddingVertical: scale(4),
  },
  label: {
    color: COLORS.white,
    fontSize: scale(12),
  },
});

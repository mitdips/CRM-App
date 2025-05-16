import {View, ActivityIndicator, Pressable} from 'react-native';
import {useStyle} from './style';
import Text from '../Text';
import {COLORS} from '../../../utils/colors';

const styles = useStyle();

const Button = ({
  title,
  bgColor,
  textColor,
  onPress,
  style,
  prefixLogo,
  postfixLogo,
  loading = false,
}) => {
  return (
    <Pressable
      onPress={!loading ? onPress : null}
      disabled={loading}
      style={({pressed}) => [
        styles.btnContainer,
        {
          backgroundColor: loading ? COLORS.gray : bgColor || COLORS.primary,
          opacity: pressed && !loading ? 0.85 : 1,
          transform: [{scale: pressed && !loading ? 0.85 : 1}],
        },
        style,
      ]}>
      <View style={styles.buttonRow}>
        {loading ? (
          <ActivityIndicator size="small" color={COLORS.white} />
        ) : (
          <>
            {prefixLogo}
            <Text
              type="medium"
              style={[styles.btnText, {color: textColor || COLORS.white}]}>
              {title}
            </Text>
            {postfixLogo}
          </>
        )}
      </View>
    </Pressable>
  );
};

export default Button;

import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useStyle} from './style';
import {COLORS} from '../../../utils/colors';

const styles = useStyle();

const Button = ({
  title,
  textColor = COLORS.white,
  onPress,
  style,
  prefixLogo,
  postfixLogo,
  loading = false,
  gradientColors = [COLORS.primary, COLORS.pink],
  disabled = false,
  bgColor,
}) => {
  const Wrapper = bgColor ? View : LinearGradient;
  const wrapperProps = bgColor
    ? {
        style: [
          styles.button,
          {backgroundColor: bgColor, opacity: disabled ? 0.6 : 1},
          style,
        ],
      }
    : {
        colors: gradientColors,
        style: [styles.button, {opacity: disabled ? 0.6 : 1}, style],
      };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      disabled={disabled || loading}>
      <Wrapper {...wrapperProps}>
        {loading ? (
          <ActivityIndicator color={textColor} />
        ) : (
          <View style={styles.content}>
            {prefixLogo && <View style={styles.icon}>{prefixLogo}</View>}
            <Text style={[styles.text, {color: textColor}]}>{title}</Text>
            {postfixLogo && <View style={styles.icon}>{postfixLogo}</View>}
          </View>
        )}
      </Wrapper>
    </TouchableOpacity>
  );
};

export default Button;

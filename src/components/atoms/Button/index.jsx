import {TouchableOpacity, View, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useStyle} from './style';
import {COLORS} from '../../../utils/colors';
import Text from '../Text';
const styles = useStyle();

const Button = ({
  title,
  textColor,
  onPress,
  style,
  prefixLogo,
  postfixLogo,
  loading = false,
  gradientColors = [COLORS.primary, COLORS.pink],
  disabled = false,
  bgColor,
  outlineColor,
  outlineWidth = 1,
}) => {
  let currentTextColor = textColor;
  let wrapperStyles = [styles.button];
  let WrapperComponent = View;
  let specificWrapperProps = {};

  if (outlineColor) {
    wrapperStyles.push({
      borderColor: outlineColor,
      borderWidth: outlineWidth,
      backgroundColor: 'transparent',
    });
    if (!textColor) {
      currentTextColor = outlineColor;
    }
  } else if (bgColor) {
    wrapperStyles.push({
      backgroundColor: bgColor,
    });
    if (!textColor) {
      currentTextColor = COLORS.white;
    }
  } else {
    WrapperComponent = LinearGradient;
    specificWrapperProps.colors = gradientColors;
    if (!textColor) {
      currentTextColor = COLORS.white;
    }
  }

  if (disabled || loading) {
    wrapperStyles.push({opacity: 0.6});
  }

  wrapperStyles.push(style);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      disabled={disabled || loading}>
      <WrapperComponent {...specificWrapperProps} style={wrapperStyles}>
        {loading ? (
          <ActivityIndicator color={currentTextColor} />
        ) : (
          <View style={styles.content}>
            {prefixLogo && <View style={styles.icon}>{prefixLogo}</View>}
            <Text style={[styles.text, {color: currentTextColor}]}>
              {title}
            </Text>
            {postfixLogo && <View style={styles.icon}>{postfixLogo}</View>}
          </View>
        )}
      </WrapperComponent>
    </TouchableOpacity>
  );
};

export default Button;

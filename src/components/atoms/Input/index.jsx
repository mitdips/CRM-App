import {useState} from 'react';
import {View, TextInput as RNTextInput} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useStyle} from './style';
import {COLORS} from '../../../utils/colors';
import Text from '../Text';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {scale} from 'react-native-size-matters';

const Input = ({
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  isPassword = false,
  error,
  style,
  autoCapitalize = 'none',
  backgroundColor,
  multiline = false,
  prefixIcon,
  showClearButton = false,
  onClear,
  ...rest
}) => {
  const [isSecure, setIsSecure] = useState(isPassword);
  const [isFocused, setIsFocused] = useState(false);
  const styles = useStyle();

  const renderRightIcon = () => {
    if (isPassword) {
      return (
        <TextInput.Icon
          icon={() => (
            <Feather
              name={isSecure ? 'eye' : 'eye-off'}
              size={24}
              color={isFocused ? COLORS.primary : COLORS.gray}
              onPress={() => setIsSecure(!isSecure)}
            />
          )}
        />
      );
    } else if (showClearButton && value?.length > 0) {
      return (
        <TextInput.Icon
          icon={() => (
            <MaterialCommunityIcons
              name="close-circle"
              size={24}
              color={COLORS.gray}
              onPress={onClear}
            />
          )}
        />
      );
    }
    return null;
  };

  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        mode="outlined"
        label={<Text>{placeholder}</Text>}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={isPassword && isSecure}
        autoCapitalize={autoCapitalize}
        multiline={multiline}
        style={[
          styles.inputField,
          multiline && {minHeight: 100, textAlignVertical: 'top'},
        ]}
        outlineColor={error ? COLORS.error : COLORS.darkGray}
        activeOutlineColor={error ? COLORS.error : COLORS.primary}
        left={
          prefixIcon ? (
            <TextInput.Icon
              icon={() => (
                <MaterialCommunityIcons
                  name={prefixIcon}
                  size={24}
                  color={COLORS.gray}
                />
              )}
            />
          ) : null
        }
        right={renderRightIcon()}
        theme={{
          colors: {
            text: COLORS.black,
            placeholder: COLORS.gray,
          },
          roundness: 15,
        }}
        render={props => (
          <RNTextInput
            {...props}
            style={[
              props.style,
              {
                fontFamily: 'WinkyRough-Regular',
                fontSize: scale(14),
              },
            ]}
          />
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />

      <Text style={styles.errorText}>{error ?? ''}</Text>
    </View>
  );
};

export default Input;

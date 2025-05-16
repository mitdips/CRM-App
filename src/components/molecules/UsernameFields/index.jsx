import Input from '../../atoms/Input';
import Text from '../../atoms/Text';

const UsernameField = ({value, onChangeText, error, styleInput, styleText}) => {
  return (
    <>
      <Text style={styleText}>Username</Text>
      <Input
        style={styleInput}
        placeholder="Enter your username"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        error={error}

      />
    </>
  );
};
export default UsernameField;

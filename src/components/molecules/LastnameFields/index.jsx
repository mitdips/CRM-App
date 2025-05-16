import Input from '../../atoms/Input';
import Text from '../../atoms/Text';

const LastnameField = ({value, onChangeText, error, styleInput, styleText}) => {
  return (
    <>
      <Text style={styleText}>Lastname</Text>
      <Input
        style={styleInput}
        placeholder="Enter your Lastname"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        error={error}

      />
    </>
  );
};
export default LastnameField;
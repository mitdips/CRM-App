import Input from '../../atoms/Input';
import Text from '../../atoms/Text';

const FirstnameField = ({value, onChangeText, error, styleInput, styleText}) => {
  return (
    <>
      <Text style={styleText}>FirstnameField</Text>
      <Input
        style={styleInput}
        placeholder="Enter your FirstnameField"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        error={error}

      />
    </>
  );
};
export default FirstnameField;
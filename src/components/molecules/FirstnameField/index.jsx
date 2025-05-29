import Input from '../../atoms/Input';

const FirstnameField = ({value, onChangeText, error, styleInput, styleText}) => {
  return (
      <Input
        style={styleInput}
        placeholder="Firstname"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        error={error}
      />
  );
};
export default FirstnameField;
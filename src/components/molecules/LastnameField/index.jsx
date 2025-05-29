import Input from '../../atoms/Input';

const LastnameField = ({value, onChangeText, error, styleInput, styleText}) => {
  return (
    <Input
      style={styleInput}
      placeholder="Lastname"
      value={value}
      onChangeText={onChangeText}
      autoCapitalize="none"
      error={error}
    />
  );
};
export default LastnameField;

import Input from '../../atoms/Input';

const MobilenoField = ({value, onChangeText, error, styleInput}) => {
  return (
    <Input
      style={styleInput}
      keyboardType="numeric"
      placeholder="Mobile No."
      value={value}
      onChangeText={onChangeText}
      error={error}
    />
  );
};
export default MobilenoField;

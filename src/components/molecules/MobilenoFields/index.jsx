import Input from '../../atoms/Input';
import Text from '../../atoms/Text';

const MobileNo = ({value, onChangeText, error, styleInput, styleText}) => {
  return (
    <>
      <Text style={styleText}>Mobile No</Text>
      <Input
        style={styleInput}
        placeholder="Enter your Mobile no"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        error={error}

      />
    </>
  );
};
export default MobileNo;
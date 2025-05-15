import Button from '../../atoms/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
const RegistrationButton = ({onPress, loading, style}) => {
  return (
    <Button
      style={{marginTop: 10}}
      title="Sign Up"
      onPress={onPress}
      loading={loading}
      postfixLogo={<Ionicons name="arrow-forward" size={20} color="white" />}
    />
  );
};

export default RegistrationButton;

import Button from '../../atoms/Button';  
import Ionicons from 'react-native-vector-icons/Ionicons';
const LoginButton = ({onPress, loading, style}) => {
  return (
    <Button
      style={style}
      title="Sign In"
      onPress={onPress}
      loading={loading}
      postfixLogo={<Ionicons name="arrow-forward" size={20} color="white" />}
    />
  );
};

export default LoginButton;

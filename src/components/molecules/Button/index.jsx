import Button from '../../atoms/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Button = ({onPress, loading, style,title}) => {
  return (
    <Button
      style={style}
      title={title}
      onPress={onPress}
      loading={loading}
      postfixLogo={<Ionicons name="arrow-forward" size={20} color="white" />}
    />
  );
};

export default Button;

import Button from '../../atoms/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
const GithubButton = ({onPress, loading,style}) => {
  return (
    <Button
    style={style}
      title="Sign with Github" 
      onPress={onPress}
      loading={loading}
      postfixLogo={<AntDesign name="github" size={20} color="white" />}
    />
  );
};

export default GithubButton;
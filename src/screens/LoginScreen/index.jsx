import AuthTemplate from '../../components/templates/AuthTemplate/index.jsx';
import LoginForm from '../../components/organisms/LoginForm/index.jsx';
import SignInHeading from '../../components/molecules/SigninHeading/index.jsx';
import NoAccountText from '../../components/molecules/NoAccountText/index.jsx';

const LoginScreen = ({navigation}) => {
  return (
    <AuthTemplate>
      <SignInHeading />
      <LoginForm  navigation={navigation} />
      <NoAccountText />
    </AuthTemplate>
  );
};

export default LoginScreen;

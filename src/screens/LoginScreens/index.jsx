import AuthTemplate from '../../components/templates/AuthTemplate';
import LoginForm from '../../components/organisms/LoginForm.jsx';
import SignInHeading from '../../components/molecules/SigninHeading';
import NoAccountText from '../../components/molecules/NoAccountText';

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

import AuthTemplate from '../../components/templates/AuthTemplate';
import LoginForm from '../../components/organisms/LoginForm';
import Heading from '../../components/molecules/Heading';
import NoAccountText from '../../components/molecules/NoAccountText';

const LoginScreen = () => {
  return (
    <AuthTemplate>
      <Heading heading="Sign In to Woorkroom" />
      <LoginForm />
      <NoAccountText />
    </AuthTemplate>
  );
};

export default LoginScreen;

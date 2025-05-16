import AuthTemplate from '../../components/templates/AuthTemplate/index.jsx';
import LoginForm from '../../components/organisms/LoginForm/index.jsx';
import Heading from '../../components/molecules/Heading/index.jsx';
import NoAccountText from '../../components/molecules/NoAccountText/index.jsx';

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

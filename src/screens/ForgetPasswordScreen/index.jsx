import ForgetPasswordForm from '../../components/organisms/ForgetPasswordForm';
import AuthTemplate from '../../components/templates/AuthTemplate';
import Heading from '../../components/molecules/Heading';

const ForgotPasswordScreen = () => {
  return (
    <AuthTemplate>
      <Heading heading="With Forget to Woorkroom" />
      <ForgetPasswordForm />
    </AuthTemplate>
  );
};
export default ForgotPasswordScreen;

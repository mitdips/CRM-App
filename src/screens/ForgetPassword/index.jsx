import ForgetPasswordForm from '../../components/organisms/ForgetPasswordForm';
import AuthTemplate from '../../components/templates/AuthTemplate';
import Heading from '../../components/molecules/Heading';
import BackButton from '../../components/molecules/BackButton';
import {View} from 'react-native';

const ForgotPasswordScreen = () => {
  return (
    <AuthTemplate>
      <BackButton />
      <Heading heading="With Forget to Woorkroom" />
      <ForgetPasswordForm />
    </AuthTemplate>
  );
};
export default ForgotPasswordScreen;

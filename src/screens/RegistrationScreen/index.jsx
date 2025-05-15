import AuthTemplate from '../../components/templates/AuthTemplate';
import RegistrationForm from '../../components/organisms/RegistrationForm/index.jsx';
import SignUpHeading from '../../components/molecules/SignupHeading/index.jsx';

const RegistrationScreen = ({navigation}) => {
  return (
    <AuthTemplate>
      <SignUpHeading />
      <RegistrationForm navigation={navigation} />
    </AuthTemplate>
  );
};

export default RegistrationScreen;

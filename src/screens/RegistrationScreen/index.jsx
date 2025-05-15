import AuthTemplate from '../../components/templates/AuthTemplate';
import RegistrationForm from '../../components/organisms/RegistrationForm.jsx';
import SignInHeading from '../../components/molecules/SigninHeading';

const RegistrationScreen = ({navigation}) => {


  return (
    <AuthTemplate>
      <SignInHeading />
      <RegistrationForm 
        navigation={navigation}
      />
      
    </AuthTemplate>
  );
};

export default RegistrationScreen;
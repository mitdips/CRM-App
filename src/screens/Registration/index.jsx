import AuthTemplate from '../../components/templates/AuthTemplate';
import RegistrationForm from '../../components/organisms/RegistrationForm';
import Heading from '../../components/molecules/Heading';
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import BackButton from '../../components/molecules/BackButton';

const RegistrationScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={{flex: 1, width: '100%'}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          keyboardShouldPersistTaps="handled">
          <AuthTemplate>
            <BackButton />
            <Heading heading="Sign Up to Woorkroom" />
            <RegistrationForm navigation={navigation} />
          </AuthTemplate>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;

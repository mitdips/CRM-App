import AuthTemplate from '../../components/templates/AuthTemplate';
import RegistrationForm from '../../components/organisms/RegistrationForm';
import SignUpHeading from '../../components/molecules/SignupHeading';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

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
            <SignUpHeading />
            <RegistrationForm navigation={navigation} />
          </AuthTemplate>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;

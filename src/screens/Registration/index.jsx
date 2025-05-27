import React, {useState} from 'react';
import AuthTemplate from '../../components/templates/AuthTemplate';
import RegistrationForm from '../../components/organisms/RegistrationForm';
import Heading from '../../components/molecules/Heading';
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import BackButton from '../../components/molecules/BackButton';
import Toast from '../../components/atoms/Toast';

const RegistrationScreen = ({navigation}) => {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = message => {
    setToastMessage(message);
    setToastVisible(true);
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1, width: '100%'}}
        behavior="padding"
        enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
            keyboardShouldPersistTaps="handled">
            <AuthTemplate>
              <BackButton />
              <Heading heading="Sign Up to Woorkroom" />
              <RegistrationForm navigation={navigation} showToast={showToast} />
            </AuthTemplate>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Toast
        visible={toastVisible}
        onDismiss={() => setToastVisible(false)}
        message={toastMessage}
      />
    </>
  );
};

export default RegistrationScreen;

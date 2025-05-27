import React, { useState, useEffect } from 'react';
import AuthTemplate from '../../components/templates/AuthTemplate';
import LoginForm from '../../components/organisms/LoginForm';
import Heading from '../../components/molecules/Heading';
import NoAccountText from '../../components/molecules/NoAccountText';
import Toast from '../../components/atoms/Toast';

const LoginScreen = ({ navigation, route }) => {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);
  };

  useEffect(() => {
    if (route?.params?.registrationSuccess) {
      showToast('Account Created Successfully');
      navigation.setParams({ registrationSuccess: undefined });
    }
  }, [route?.params?.registrationSuccess, navigation, showToast]);

  return (
    <AuthTemplate>
      <Heading heading="Sign In to Woorkroom" />
      <LoginForm
        showToast={showToast}
        navigation={navigation}
        route={route}
      />
      <NoAccountText />
      <Toast
        visible={toastVisible}
        onDismiss={() => setToastVisible(false)}
        message={toastMessage}
      />
    </AuthTemplate>
  );
};

export default LoginScreen;
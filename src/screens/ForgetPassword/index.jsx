import React, {useState} from 'react';
import ForgetPasswordForm from '../../components/organisms/ForgetPasswordForm';
import AuthTemplate from '../../components/templates/AuthTemplate';
import Heading from '../../components/molecules/Heading';
import BackButton from '../../components/molecules/BackButton';
import Toast from '../../components/atoms/Toast';

const ForgotPasswordScreen = ({navigation}) => {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = message => {
    setToastMessage(message);
    setToastVisible(true);
  };

  return (
    <>
      <AuthTemplate>
        <BackButton />
        <Heading heading="Forgot Password" />
        <ForgetPasswordForm showToast={showToast} navigation={navigation} />
      </AuthTemplate>
      <Toast
        visible={toastVisible}
        onDismiss={() => setToastVisible(false)}
        message={toastMessage}
      />
    </>
  );
};
export default ForgotPasswordScreen;

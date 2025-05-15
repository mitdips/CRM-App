import React from 'react';
import AuthTemplate from '../../components/templates/AuthTemplate';
import LoginForm from '../../components/organisms/LoginForm.jsx';
import SignInHeading from '../../components/molecules/SigninHeading';
import NoAccountText from '../../components/molecules/NoAccountText';

const LoginScreen = ({navigation}) => {
  const handleLogin = async values => {
    try {
      console.log('Login values:', values);
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  return (
    <AuthTemplate>
      <SignInHeading />
      <LoginForm onSubmit={handleLogin} navigation={navigation} />
      <NoAccountText />
    </AuthTemplate>
  );
};

export default LoginScreen;

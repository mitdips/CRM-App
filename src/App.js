import React, {useEffect} from 'react';
import {configureGoogleSignIn} from './utils/googleSignInConfig';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  useEffect(() => {
    // Initialize Google Sign-In configuration
    configureGoogleSignIn();
  }, []);

  return <LoginScreen />;
};

export default App; 
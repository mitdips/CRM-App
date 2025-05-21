import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';

const StackNavigator = () => {
  const [user, setUser] = useState({});

  // Handle user state changes
  const onAuthStateChanged = user => {
    console.log('user', user);
    setUser(user);
  };

  useEffect(() => {
    getSubscriber();
  }, []);
  const getSubscriber = () => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  };

  return (
    <NavigationContainer>
      {user ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default StackNavigator;

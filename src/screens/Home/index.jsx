import React from 'react';
import {View, Button} from 'react-native';
import Text from '../../components/atoms/Text';
import {useDispatch} from 'react-redux';
import {getAuth, signOut} from '@react-native-firebase/auth';
import {setUserData} from '../../redux/slices/AuthSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      if (auth.currentUser) {
        console.log('Signing out from Firebase...');
        await signOut(auth);
        console.log('✅ Firebase sign-out successful.');
      } else {
        console.log('No user currently signed in.');
      }

      // Reset userData in Redux store
      dispatch(setUserData(null));
      console.log('✅ Redux userData reset to initial state.');
    } catch (error) {
      console.error('❌ Error during sign-out:', error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to Home Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;

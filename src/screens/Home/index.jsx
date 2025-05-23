import React from 'react';
import {View, Button} from 'react-native';
import Text from '../../components/atoms/Text';
import {useDispatch} from 'react-redux';
import {getAuth} from '@react-native-firebase/auth';
import {clearUserData} from '../../redux/slices/AuthSlice';
import HomeTemplate from '../../components/templates/HomeTemplate';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await auth.signOut();
      dispatch(clearUserData());
    } catch (error) {
      console.error('❌ Error during sign-out:', error);
    }
  };

  return (
    <HomeTemplate>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </HomeTemplate>
  );
};

export default HomeScreen;

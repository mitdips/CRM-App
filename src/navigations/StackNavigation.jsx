import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import {View, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';

const StackNavigator = () => {
  // Get auth state from Redux
  const userData = useSelector(state => state.auth.userData);

  // Show loading indicator while initializing
  if (!userData && userData !== null) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userData ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default StackNavigator;
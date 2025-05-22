import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';

const StackNavigator = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default StackNavigator;

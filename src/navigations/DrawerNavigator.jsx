import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../routes/CustomDrawer';
import DashboardScreen from '../screens/Dashboard';
import ProjectsScreen from '../screens/Projects';
import EventsScreen from '../screens/Events';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '65%',
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{title: 'Dashboard'}}
      />
      <Drawer.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{title: 'My Projects'}}
      />
      <Drawer.Screen
        name="Events"
        component={EventsScreen}
        options={{title: 'Upcoming Events'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeTemplate from '../../components/templates/HomeTemplate'; // Import HomeTemplate

const EventsScreen = () => {
  return (
    <HomeTemplate>
      <View style={styles.container}>
        <Text style={styles.text}>Events Screen Content</Text>
        {/* If this is your EventFormScreen, you'd put the form content here */}
      </View>
    </HomeTemplate>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 20},
});

export default EventsScreen;

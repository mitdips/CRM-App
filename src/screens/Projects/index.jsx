import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeTemplate from '../../components/templates/HomeTemplate';

const ProjectsScreen = () => {
  return (
    <HomeTemplate>
      <View style={styles.container}>
        <Text style={styles.text}>Projects Screen Content</Text>
      </View>
    </HomeTemplate>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 20},
});

export default ProjectsScreen;

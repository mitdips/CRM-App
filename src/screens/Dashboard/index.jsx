import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeTemplate from '../../components/templates/HomeTemplate';

const DashboardScreen = () => {
  return (
    <HomeTemplate>
    <View style={styles.container}>
        <Text style={styles.text}>Dashboard Screen Content</Text>
    </View>
    </HomeTemplate>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
});

export default DashboardScreen;
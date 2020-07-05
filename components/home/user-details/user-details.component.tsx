import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetails = () => {
  return (
    <View>
      <Text style={styles.headerText}>Name</Text>
      <Text style={styles.subHeaderText}>Your Name</Text>
      <Text style={styles.headerText}>Github Link</Text>
      <Text style={styles.linkText}>Your Github Link</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#333',
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 20,
    color: '#333',
  },
  linkText: {
    fontSize: 20,
    color: 'blue',
  },
});

export default UserDetails;

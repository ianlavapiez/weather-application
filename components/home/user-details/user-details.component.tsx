import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetails: FunctionComponent = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Name</Text>
      <Text style={styles.linkText}>Your Github Link</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#333',
    textAlign: 'center',
  },
  linkText: {
    fontSize: 20,
    color: 'blue',
    marginVertical: 25,
  },
});

export default UserDetails;

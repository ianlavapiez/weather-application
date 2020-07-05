import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LocationDetails = () => {
  return (
    <View>
      <Text style={styles.headerText}>Longitude</Text>
      <Text style={styles.subHeaderText}>Your Longitude</Text>
      <Text style={styles.headerText}>Latitude</Text>
      <Text style={styles.subHeaderText}>Your Latitude</Text>
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
});

export default LocationDetails;

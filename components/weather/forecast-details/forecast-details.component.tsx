import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ForecastDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Date</Text>
      <Text style={styles.subHeaderText}>Your Date</Text>
      <Text style={styles.headerText}>Temperature</Text>
      <Text style={styles.subHeaderText}>Your Temperature</Text>
      <Text style={styles.headerText}>Description</Text>
      <Text style={styles.subHeaderText}>Your Description</Text>
      <Text style={styles.headerText}>Main</Text>
      <Text style={styles.subHeaderText}>Your Main</Text>
      <Text style={styles.headerText}>Pressure</Text>
      <Text style={styles.subHeaderText}>Your Pressure</Text>
      <Text style={styles.headerText}>Humidity</Text>
      <Text style={styles.subHeaderText}>Your Humidity</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
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

export default ForecastDetails;

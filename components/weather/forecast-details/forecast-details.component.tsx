import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Context } from '../../../context/weather-forecast.context';

const ForecastDetails = ({ navigation }: any) => {
  const { state, getWeatherForecast } = useContext(Context);

  useEffect(() => {
    getWeatherForecast();

    const listener = navigation.addListener('didFocus', () => {
      getWeatherForecast();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.separatorText}>|</Text>
      <Text style={styles.detailText}>{state.date}</Text>
      <Text style={styles.separatorText}>|</Text>
      <Text style={styles.detailText}>{state.temperature}</Text>
      <Text style={styles.separatorText}>|</Text>
      <Text style={styles.detailText}>{state.description}</Text>
      <Text style={styles.separatorText}>|</Text>
      <Text style={styles.detailText}>{state.main}</Text>
      <Text style={styles.separatorText}>|</Text>
      <Text style={styles.detailText}>{state.pressure}</Text>
      <Text style={styles.separatorText}>|</Text>
      <Text style={styles.detailText}>{state.humidity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separatorText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#333',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  detailText: {
    fontSize: 20,
    color: '#333',
  },
});

export default ForecastDetails;

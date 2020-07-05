import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ForecastDetails from '../../components/weather/forecast-details/forecast-details.component';

const WeatherScreen = () => {
  return (
    <View>
      <ForecastDetails />
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherScreen;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ForecastDetails from '../../components/weather/forecast-details/forecast-details.component';

const WeatherScreen = ({ navigation }: any) => {
  return (
    <View>
      <ForecastDetails navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherScreen;

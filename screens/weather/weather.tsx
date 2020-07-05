import React, { FunctionComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import { INavigationProps } from '../../interfaces/navigation-interface';

import ForecastDetails from '../../components/weather/forecast-details/forecast-details.component';

interface Props {
  navigation: any;
}

const WeatherScreen: FunctionComponent<INavigationProps> = ({
  navigation,
}): JSX.Element => {
  return (
    <View>
      <ForecastDetails navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherScreen;

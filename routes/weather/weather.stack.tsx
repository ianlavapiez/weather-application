import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import { INavigationProps } from '../../interfaces/navigation-interface';

import Header from '../../shared/header/header';
import Weather from '../../screens/weather/weather';

const screens = {
  Weather: {
    screen: Weather,
    navigationOptions: ({ navigation }: INavigationProps) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title={'Weather Forecast'} />
        ),
      };
    },
  },
};

const WeatherStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 100 },
  },
});

export default WeatherStack;

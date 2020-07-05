import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Navigator from './routes/drawer';
import { Provider as LocationProvider } from './context/location.context';
import { Provider as WeatherForecastProvider } from './context/weather-forecast.context';

import LoginScreen from './screens/login/login';

const AuthStackNavigation = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

const MainNavigation = createSwitchNavigator({
  AuthStack: AuthStackNavigation,
  HomeDrawer: Navigator,
});

const App = createAppContainer(MainNavigation);

export default () => {
  return (
    <WeatherForecastProvider>
      <LocationProvider>
        <App />
      </LocationProvider>
    </WeatherForecastProvider>
  );
};

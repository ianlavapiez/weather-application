import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './home/home.stack';
import WeatherStack from './weather/weather.stack';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Weather: {
    screen: WeatherStack,
  },
});

export default createAppContainer(RootDrawerNavigator);

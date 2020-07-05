import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Header from '../../shared/header/header';
import Home from '../../screens/home/home';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }: any) => {
      return {
        headerTitle: () => <Header navigation={navigation} title={'Home'} />,
      };
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 100 },
  },
});

export default HomeStack;

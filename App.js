import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import DetailsScreen from './vistas/Request'
import HomeScreen from './vistas/HomeScreen'

export default RootStack = StackNavigator({
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },{
    initialRouteName: 'Home',
});

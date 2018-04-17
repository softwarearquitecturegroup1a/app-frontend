import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DetailsScreen from './vistas/Request'
import HomeScreen from './vistas/HomeScreen'

import Login from './vistas/Login'
export default RootStack = StackNavigator({
    Home: {
      screen: Login,
    },
    Details: {
      screen: HomeScreen,
    },
  },{
    initialRouteName: 'Home',
});

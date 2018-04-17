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
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#2c3e50',
        color: '#FFFFFF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
});

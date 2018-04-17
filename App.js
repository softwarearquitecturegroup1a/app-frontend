import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DetailsScreen from './vistas/Request'
import HomeScreen from './vistas/HomeScreen'

import Login from './vistas/Login'
import Historial from './vistas/Historial'
import Profile from './vistas/Profile'


export default RootStack = StackNavigator({
    Home: {
      screen: Profile,
    },
    Details: {
      screen: HomeScreen,
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

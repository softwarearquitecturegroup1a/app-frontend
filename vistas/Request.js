import React, { Component } from 'react';
import {Text, Button, View} from 'react-native';
import {styles} from '../styles';

export default class DetailsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details Again"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
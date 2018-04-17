import React from 'react';
import { Text, Button, View, Image } from 'react-native';
import { styles, home } from '../styles';
import { biciunLogo } from "../assets";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={biciunLogo} style={home.image} />
        <Text style={[styles.h1, home.title]}>BICI-UN</Text>
        <Text style={styles.h4}>Sabemos que llegar a tiempo no es tarea facil. Nosotros te ayudamos.</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
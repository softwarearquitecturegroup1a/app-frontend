import React from 'react';
import { Text, Button, View, Image } from 'react-native';
import { styles, home } from '../styles';
import { biciunLogo } from "../assets";

export default class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: <Text>Logo</Text>,
      headerRight: (
        <Button onPress={params.increaseCount} title="+1" color="#fff" />
      ),
    };
  };

  render() {
    return (
      <View style={styles.container} >
        <Image source={biciunLogo} style={home.image} />
        <Text style={[styles.h1, home.title]}>BICI-UN</Text>
        <Text style={[styles.p, home.eslogan]}>Sabemos que llegar a tiempo no es tarea facil. Nosotros te ayudamos.</Text>
        <Button
          color='#50bd9c'
          title="Empezar"
          onPress={() => this.props.navigation.navigate('Login')}
          />
      </View>
    );
  }
}
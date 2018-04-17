import React, { Component } from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import { styles } from '../styles';
import glRequest from '../graphQLUtils'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      identification: '',
      userError: '',
      identificationError: '',
    }
  }

  handleUserChange(event) {
    console.log(event);
    this.setState({ user: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ identification: event.target.value });
  }

  handleSubmit(event) {
    
    const user = this.state.user;
    const identification = this.state.identification;
    let error = true;

    if (!user || user.length < 1) {
      this.setState({ userError: 'Escriba un usuario valido.' })
      error = true;
    }

    if (!identification || identification.length < 1) {
      this.setState({ identificationError: 'Identificacion invalida.' })
      error = true;
    }

    // Ejemplo de uso GraphQL
    var request = `
    {
      userById(id: 1){
        name
        lastname
        email
        id_code
      }
    }`;
    
    glRequest(request, function(data){
      console.log(data.userById);
    });

  }

  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.h3}>
          Login
        </Text>
        <TextInput
          value={this.state.user}
          style={{ height: 40 }}
          placeholder='Username'
          placeholderTextColor='white'
          onChange={this.handleUserChange.bind(this)} />

        <TextInput
          style={{ height: 40 }}
          placeholder='Password'
          placeholderTextColor='#fff'
          onChange={this.handlePasswordChange.bind(this)} />

        <Button
          title="Iniciar Sesión"
          onPress={this.handleSubmit.bind(this)}
        />
      </View>

    );
  }
}
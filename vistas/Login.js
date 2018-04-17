import React, { Component } from 'react';
import {Text, TextInput, Button, View} from 'react-native';
import {styles} from '../styles';

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

  render() {
    return (
      <View style={styles.container}>

        <Text style={{fontSize: 27}}>
          Login
        </Text>
        <TextInput placeholder='Username' placeholderTextColor='white' />
        <TextInput placeholder='Password' placeholderTextColor='#fff' />  
        
        
        <Button
          title="Iniciar Sesión"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
      
    );
  }
}
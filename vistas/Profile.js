import React, { Component } from 'react';
import {Text, Button, View, Image} from 'react-native';
import {styles, home} from '../styles';
import {icono_profile} from '../assets';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={{fontSize: 27}}>
          BiciUN - Perfil
        </Text>
        
        <Image source={icono_profile} />

        <Text style={styles.p}>Nombre:</Text>
              
    
        <Text style={styles.p}>Apellido:</Text>

        <Text style={styles.p}>Documento:</Text>
        
      </View>
      
    );
  }
}
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
        
        <Image source={icono_profile} style={home.image} />
        <Text style={styles.h4}>Nombre:</Text>
              
    
        <Text style={styles.h4}>Apellido:</Text>

        <Text style={styles.h4}>Documento:</Text>
        
        <Button
          title="Iniciar Sesión"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
      
    );
  }
}
import React, { Component } from 'react';
import {Text, TextInput, Button, View, Image} from 'react-native';
import {styles, home, historial} from '../styles';
import {icono_prestamos} from '../assets';

export default class Historial extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={[styles]}>Historial de Prestamos</Text>
        
        <Text style={[styles]}>Serial       Estudiante    Fecha  </Text>
        <Text style={[styles]}>21325456     1022123456    Apr 16   </Text>
                
      </View>
      
    );
  }
}
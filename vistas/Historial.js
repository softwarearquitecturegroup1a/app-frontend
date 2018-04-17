import React, { Component } from 'react';
import {Text, TextInput, Button, View, Image} from 'react-native';
import {styles, home, historial} from '../styles';
import {icono_historial} from '../assets';

export default class Historial extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Image source={icono_historial} />
        <Text style={{fontSize: 27}} >
          BiciUN - Historial
        </Text>

        <Text style={styles.p}>Serial       Estudiante    Fecha  </Text>
        <Text style={styles.p}>21325456     1022123456    Apr 16   </Text>
                
      </View>
      
    );
  }
}
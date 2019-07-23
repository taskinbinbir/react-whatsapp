import React, { Component } from 'react';
import { StyleSheet, Alert, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props) {
      super(props);    
  }


  onPressButton() {
      Alert.alert('You tapped the button!')
  }

  mouseOver() {
      Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
         <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={this.onPressButton}>     
            <Text style={styles.textOne}>whatsapp </Text>
         </TouchableOpacity>
      </View>
    );
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
  //  justifyContent: "center", 
  //  alignItems: "center",     
  },
  button: {
    backgroundColor: "green",
    justifyContent: "center", 
    alignItems: "center",    
    width: 70,
    height: 70, 
    borderRadius: 35,
    position: 'absolute',
    bottom:5,
    right:5,
  },
  textOne: {
    color: "white",
  },
});
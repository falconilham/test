import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  input:{
    borderRadius: 4,
    borderColor: 5,
    bor
  }
});

export default class HelloWorldApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      nama: "ilham"
    }
  }
   
  render() {
    return (
      <View>
        <Text>Hello, {this.state.nama}</Text>

        <TextInput style={styles.input}></TextInput>
        <TextInput style={{borderColor: "black", borderRadius: 4}}></TextInput>
          
      </View>
    );
  }
}

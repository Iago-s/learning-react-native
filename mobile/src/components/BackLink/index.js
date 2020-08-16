import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const BackLink = (props) => {
  return(
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-end',
    marginTop: 5,
  },
  
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#109B57',
    
    paddingRight: 10,
    paddingLeft: 10,
  }
});

export default BackLink;
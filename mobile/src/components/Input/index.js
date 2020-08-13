import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
  return(
    <TextInput 
      style={styles.inputText}
      placeholder={props.placeholder}
      placeholderTextColor="#B9C7D2"
    />
  );
};

const styles = StyleSheet.create({
  inputText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',

    height: 50,

    backgroundColor: '#F5F5F5',

    textDecorationLine: 'underline',
    
    marginBottom: 10,
    padding: 10,

    borderWidth: 1,
    borderColor: '#F5F5F5',
    borderRadius: 8,
  },
});

export default Input;
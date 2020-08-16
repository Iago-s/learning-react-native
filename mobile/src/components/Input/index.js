import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
  return(
    <TextInput 
      style={styles.inputText}
      placeholder={props.placeholder}
      placeholderTextColor="#F5F5F5"
      
      autoCapitalize={props.autoCapitalize}
      autoCompleteType={props.autoCompleteType}
      autoCorrect={props.autoCorrect}

      value={props.value}
      onChangeText={props.onChangeText}
      
    />
  );
};

const styles = StyleSheet.create({
  inputText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#F5F5F5',

    height: 50,

    backgroundColor: '#272727',

    textDecorationLine: 'underline',
    
    marginBottom: 10,
    padding: 10,

    borderWidth: 1,
    borderColor: '#272727',
    borderRadius: 8,
  },
});

export default Input;
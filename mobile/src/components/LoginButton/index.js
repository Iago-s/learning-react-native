import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LoginButton = (props) => {
  return(
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#109B57',

    borderWidth: 1,
    borderColor: '#109B57',
    borderRadius: 8,
  },

  buttonText: {
    color: '#f5f5f5', 
    fontSize: 25,
    fontWeight: 'bold'
  },
});

export default LoginButton;
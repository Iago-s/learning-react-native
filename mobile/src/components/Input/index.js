import React from 'react';
import { StyleSheet, TextInput} from 'react-native';

const Input = () => {
  const datas = ['email', 'password'];

  return (
    <TextInput 
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    borderColor: 'black', 
    borderRadius: 8,

    padding: 5,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  }
});

export default Input;
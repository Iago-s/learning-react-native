import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Botao = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>
        Adicionar
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '80%',
    backgroundColor: 'red',
    borderRadius: 8,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: 10,
  }
}) 

export default Botao;
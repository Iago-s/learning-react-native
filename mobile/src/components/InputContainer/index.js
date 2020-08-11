import React from 'react';
import { StyleSheet, View } from 'react-native';

const InputContainer = () => {
  return (
    <View style={styles.view} />
  );
}

const styles = StyleSheet.create({
  view: {
    width: '80%',
    marginTop: '50%',
    marginBottom: 10,
    color: 'black',
    backgroundColor: 'green',
  }
});

export default InputContainer;
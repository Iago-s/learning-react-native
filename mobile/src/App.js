import React from 'react';
import { StyleSheet, View} from 'react-native';

import InputContainer from './components/InputContainer';
import Input from './components/Input';
import Botao from './components/Botao';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.view}>
        <Input 
          defaultValue="nome"
        />
        <Input />  
      </View>
      <Botao />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  view: {
    width: '80%',
    marginTop: '50%',
    marginBottom: 10,
    color: 'black',
  }
});

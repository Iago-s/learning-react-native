import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

import Input from '../../components/Input';
import RegisterButton from '../../components/LoginButton';
import BackButton from '../../components/BackLink';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if(name === '' || email === '' || password === '') {
      alert('Preencha os campos.');
    } else {
      alert('Parabéns, cadastro realizado com sucesso!');
      
      return navigation.navigate('Login');
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Cadastre-se grátis</Text>
      
      <View style={styles.inputContainer}>
        <Input 
          placeholder="Nome" 
          value={name} 
          onChangeText={value => setName(value)} 

          autoCapitalize="words"
          
        />
        <Input 
          placeholder="Email" 
          value={email} 
          onChangeText={value => setEmail(value)} 

          autoCapitalize="none"
          autoCompleteType="off"
        />
        <Input 
          placeholder="Senha" 
          value={password} 
          onChangeText={value => setPassword(value)} 

          autoCapitalize="none"
          autoCompleteType="off"
        />

        <RegisterButton text="Cadastrar" onPress={handleRegister}/>
                
        <BackButton text="Ja tenho conta" 
          onPress={() => navigation.goBack()} 
        />
      </View>
    </View>
  );
}

export default Register;

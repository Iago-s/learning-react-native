import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import LoginButton from '../../components/LoginButton';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.inputContainer}>

        <Input placeholder="E-mail" textContentType="emailAddress" />
        <Input placeholder="Password" textContentType="password" />

        <LoginButton text="Login" />

        <TouchableOpacity style={styles.registerLink}
          onPress={() => { 
            navigation.navigate('Register', { name: 'Iago Silva Oliveira' })
          }}
        >
          <Text style={styles.registerLinkText}>Criar conta</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

export default Login;
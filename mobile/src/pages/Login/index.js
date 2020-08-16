import React from 'react';
import { View, } from 'react-native';

import styles from './styles';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import LoginButton from '../../components/LoginButton';
import RegisterButton from '../../components/BackLink';

const Login = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.inputContainer}>

        <Input 
          placeholder="E-mail" 
          textContentType="emailAddress" 
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
        />
        <Input 
          placeholder="Senha" 
          textContentType="password" 
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
        />

        <LoginButton text="Login" onPress={() => navigation.navigate('StocksPortfolios')}/>

        <RegisterButton 
          text="Criar conta"
          onPress={() => navigation.navigate('Register')}
        />
      </View>

    </View>
  );
}

export default Login;
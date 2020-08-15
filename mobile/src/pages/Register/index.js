import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

const Register = ({ route, navigation }) => {
  const { name } = route.params;

  return(
    <View>
      <Text>Register page</Text>
      <Text>Welcome {name}!</Text>
      <Button
        title="Ja tenho cadastro"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Meu perfil"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

export default Register;

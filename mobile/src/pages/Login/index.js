import React from 'react';
import { StyleSheet, View, TextInput, Image, Text, TouchableOpacity } from 'react-native';

import logo from '../../assets/logoIagoDeveloper.png';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.img}
      />
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#b9c7d2"

          textContentType="emailAddress"
        />
        <TextInput style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#b9c7d2"
          textContentType="password"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.registerLink}
          onPress={() => { 
            navigation.navigate('Register', { name: 'Register' })
          }}
        >
          <Text style={styles.registerLinkText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#B9C7D2',

    justifyContent: 'center',
    alignItems: 'center'
  },

  img: {
    width: 300,
    height: 100,
    padding: 10,
    marginBottom: 30, 
  },  

  inputContainer: {
    width: '80%',
    borderRadius: 4,
    
    borderColor: '#f5f5f5',
  },

  inputText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',

    height: 50,

    backgroundColor: '#f5f5f5',

    textDecorationLine: 'underline',
    
    marginBottom: 10,
    padding: 10,

    borderWidth: 1,
    borderColor: '#f5f5f5',
    borderRadius: 8,
  },

  button: {
    width: '100%',
    height: 50,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'red',

    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
  },

  buttonText: {
    color: '#f5f5f5', 
    fontSize: 25,
    fontWeight: 'bold'
  },

  registerLink: {
    alignItems: 'flex-end',
    marginTop: 5,
  },
  
  registerLinkText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#f5f5f5',
    
    paddingRight: 10,
    paddingLeft: 10,
    
  }
});

export default Login;
import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{
            title: 'Pagina de login.'
          }}
        />
        <Stack.Screen 
          name="Register"
          component={Register}
          options={{
            title: 'Pagina de cadastro.'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
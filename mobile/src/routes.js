import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './pages/Login';
import Register from './pages/Register';

import StocksPortfolios from './pages/StocksPortfolios';
import Portfolio from './pages/Portfolio'

const Routes = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        mode="modal"
        headerMode="none"
      >
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{
            title: 'Fazer login',
          }}
        />
        <Stack.Screen 
          name="Register"
          component={Register}
          options={{
            title: 'Criar conta',
          }}
        />
        <Stack.Screen 
          name="StocksPortfolios"
          component={StocksPortfolios}
          options={{
            title: 'Carteiras de ações',
          }}
        />
        <Stack.Screen 
          name="Portfolio"
          component={Portfolio}
          options={{
            title: 'Acompanhe seus investimentos',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
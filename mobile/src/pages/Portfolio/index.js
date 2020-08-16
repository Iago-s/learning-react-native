import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Portfolio = ({ route, navigation }) => {
  return(
    <View>
      <Text>Carteira</Text>
      <Text>{JSON.stringify(route.params)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default Portfolio;
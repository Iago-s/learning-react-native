import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const AddPortfolio = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Add portfolio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  text: {
    color: '#F5F5F5',
    fontSize: 20,
  }
});

export default AddPortfolio;
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Profile = ({ navigation }) => {
  return(
    <View>
      <Text>Profile page</Text>
      <Button 
        title="Go to Login"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Profile;
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import logo from '../../assets/logo.png';

const Logo = () => {
  return (
    <Image
      source={logo}
      style={styles.img}
    />
  );
};

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    padding: 10,
    marginBottom: 30,
    borderRadius: 8
  },

});

export default Logo;
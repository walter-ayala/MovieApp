import React from 'react';
import {Image, StyleSheet} from 'react-native';

function Logo() {
  return (
    <Image
      source={require('../assets/images/movies.png')}
      style={styles.imageDesign}
    />
  );
}
const styles = StyleSheet.create({
  imageDesign: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 30,
  },
});

export default Logo;

import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../assets/colors/colors';

const Button = ({onPress, title, loading}) => {
  if (loading) {
    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.8}>
        <ActivityIndicator size="small" color={Colors.WHITE} />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.8}>
      <Text allowFontScaling={false} style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 54,
    backgroundColor: Colors.PRIMARY,
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 16,
  },
  text: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconColor: {
    color: Colors.WHITE,
    fontSize: 20,
    marginRight: 8,
  },
});

export default Button;

import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {Colors} from '../assets/colors/colors';

const Field = ({
  value,
  label,
  placeholder = '',
  type = 'default',
  onChangeText,
  secure,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelDesign} allowFontScaling={false}>
        {label}
      </Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        allowFontScaling={false}
        style={styles.inputDesign}
        keyboardType={type}
        onChangeText={onChangeText}
        secureTextEntry={secure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  labelDesign: {
    fontSize: 16,
    marginBottom: 10,
    color: Colors.SECONDARY,
    fontWeight: 'bold',
  },
  inputDesign: {
    borderWidth: 0.5,
    borderRadius: 30,
    padding: 10,
    borderColor: Colors.GRAY,
  },
});

export default Field;

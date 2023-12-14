// File: FormContainer.js
import React from 'react';
import { StyleSheet, View } from 'react-native';

const FormContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    elevation: 5, // Add elevation for a slight shadow (Android only)
  },
});

export default FormContainer;

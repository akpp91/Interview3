import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Text } from '@rneui/themed';

const InputField = ({ label, value, setValue }) => (
  
  <View style={styles.inputContainer}>
    <Text h4>{label}</Text>
    <Input
      onChangeText={(text) => setValue(text)}
      value={value}
      placeholder={label} 
    />
  </View>

);

const styles = StyleSheet.create({
  inputContainer: {
    margin: 20,
    // height: 100,
    // flex:1
  },
});

export default InputField;

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Text } from '@rneui/themed';

const InputField = ({ label, value, setValue, isMobile, error, inputType, bgColor, textColor, placeholderColor }) => {
  const prefix = isMobile ? '+91 ' : '';

  const handleTextChange = (text) => {
    setValue(isMobile ? text.replace(/^(\+91\s?)|[^0-9]/g, '') : text);
  };

  return (
    <View style={[styles.inputContainer, { backgroundColor: bgColor }]}>
      <Text h4 style={{ color: textColor }}>{label}</Text>
      <Input
        onChangeText={handleTextChange}
        value={prefix + value} 
        placeholder={label}
        placeholderTextColor={placeholderColor}
        style={{ color: textColor }}
      />
      {error && (
        <Text style={[styles.errorText, { color: 'red' }]} status="danger">{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 20,
  },
  errorText: {
    marginTop: 5,
  },
});

export default InputField;

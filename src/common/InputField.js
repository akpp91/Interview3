import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Text } from '@rneui/themed';

const InputField = ({ label, value, mobileNumber,setValue, isMobile, error, inputType, bgColor, textColor, placeholderColor, isMandatory  }) => {
  const prefix = isMobile ? '+91 ' : '';

  const handleTextChange = (text) => {
    if (isMobile) {
      const formattedNumber = text.replace(/[^0-9]/g, '');
      setValue(formattedNumber);
    } else {
      setValue(text);
    }
  };
  

  return (
    <View style={[styles.inputContainer, { backgroundColor: bgColor }]}>
      <Text h4 style={{ color: textColor }}>
        {label} {isMandatory && <Text style={{ color: 'red' }}>*</Text>}
      </Text>
      <Input
  onChangeText={handleTextChange}
  value={isMobile ? formatMobileNumber(mobileNumber) : value}
  placeholder={`${label}`}
  placeholderTextColor={placeholderColor}
  style={{ color: textColor }}
  keyboardType={isMobile ? 'numeric' : 'default'}
/>

      {error && (
        <Text style={[styles.errorText, { color: 'red' }]} status="danger">{error}</Text>
      )}
    </View>
  );
};

const formatMobileNumber = (number) => {
  return number; // Simply return the number without any prefix
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

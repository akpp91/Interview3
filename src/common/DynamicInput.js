import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

const DynamicInput = ({
  inputType,
  backgroundColor,
  textColor,
  placeholderColor,
  isMandatory,
  label,
  isChecked,
  onToggleCheck,
  onDateChange,
  initialValue,
  countryCode,
  onUpdatePress,
  buttonStyle,
}) => {
  const [value, setValue] = useState(initialValue);

  const renderInput = () => {
    switch (inputType) {
      case 'text':
        return (
          <TextInput
            style={[styles.input, { backgroundColor, color: textColor }]}
            placeholder={label}
            placeholderTextColor={placeholderColor}
            value={value}
            onChangeText={(text) => setValue(text)}
          />
        );
      case 'checkbox':
        return (
          <View style={styles.checkboxContainer}>
            <CheckBox
              checked={isChecked}
              onPress={onToggleCheck}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
            <Text style={{ color: textColor }}>{label}</Text>
          </View>
        );
      // Add more cases for other input types
      default:
        return null;
    }
  };

  return (
    <View style={{ marginBottom: 20 }}>
      {isMandatory && <Text style={{ color: 'red' }}>*</Text>}
      {renderInput()}
      {inputType === 'date' && (
        <TouchableOpacity onPress={onDateChange}>
          <Text style={{ color: textColor }}>Select Date</Text>
        </TouchableOpacity>
      )}
      {inputType === 'button' && (
        <TouchableOpacity onPress={onUpdatePress} style={buttonStyle}>
          <Text style={{ color: buttonStyle.color }}>Update</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DynamicInput;

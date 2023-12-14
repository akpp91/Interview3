import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../common/DynamicHeader'
import DynamicInput from '../common/DynamicInput'




const MyProfile = () => {

  const [isChecked, setChecked] = useState(false);

  const handleToggleCheck = () => {
    setChecked(!isChecked);
  };

  const handleDateChange = () => {
    // Implement date picker logic here
    console.log('Date selected');
  };

  const handleUpdatePress = () => {
    // Implement update button logic here
    console.log('Update button pressed');
  };

  return (
    <View>
    <Header 
    title={'My Profile'}
    />   
      <View style={styles.container}>
    

      <DynamicInput
        inputType="text"
        backgroundColor="lightblue"
        textColor="black"
        placeholderColor="gray"
        isMandatory={true}
        label="Name"
        initialValue=""
      />
      <DynamicInput
        inputType="checkbox"
        textColor="black"
        isMandatory={false}
        label="Male"
        isChecked={isChecked}
        onToggleCheck={handleToggleCheck}
      />
      <DynamicInput
        inputType="date"
        textColor="black"
        isMandatory={true}
        label="Date of Birth"
        onDateChange={handleDateChange}
      />
      <DynamicInput
        inputType="button"
        buttonStyle={{ backgroundColor: 'green', width: 100, height: 40, borderRadius: 5, color: 'white' }}
        onUpdatePress={handleUpdatePress}
      />
    </View>   
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20, // Adjust the radius as needed
    borderTopRightRadius: 20, // Adjust the radius as needed
    paddingHorizontal: 16, // Adjust the padding as needed
  },
})
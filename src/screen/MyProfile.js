import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../common/DynamicHeader';
import InputField from '../common/InputField';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckBox, Text } from '@rneui/themed';
import { Card } from '../common/Card';
import { CardSection } from '../common/CardSection';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Button } from 'react-native-elements';
import Toast from 'react-native-toast-message';

const MyProfile = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [birthPlace, setBirthPlace] = useState('');
  const [birthPlaceError, setBirthPlaceError] = useState('');


  const [altmobileNumber, setMobileNumber] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');

  const [selectedIndex, setIndex] = useState(0);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const showToast = () => {
    setNameError('');
    setEmailError('');
    setBirthPlaceError('');
    setMobileNumberError('');
  
    if (!name || !email || !birthPlace || !altmobileNumber) {
      setNameError(!name ? 'Name is required' : '');
      setEmailError(!email ? 'Email is required' : '');
      setBirthPlaceError(!birthPlace ? 'Place of Birth is required' : '');
      setMobileNumberError(!altmobileNumber ? 'Alternative Phone Number is required' : '');
  
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Validation Error',
        text2: 'All fields must be filled.',
      });
      return;
    }
  
    if (altmobileNumber.length !== 10) {
      setMobileNumberError('Alternative Phone Number must be 10 digits');
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Validation Error',
        text2: 'Alternative Phone Number must be 10 digits.',
      });
      return;
    }
  
    console.log('Name:', name);
    console.log('Gender:', selectedIndex === 0 ? 'Male' : 'Female');
    console.log('Email:', email);
    console.log('Place of Birth:', birthPlace);
    console.log('Alternative Phone Number:', altmobileNumber);
    console.log('Date of Birth:', selectedDate.toDateString());
    console.log('Time of Birth:', selectedTime.toLocaleTimeString());
  
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Profile Updated!',
      text2: `Name: ${name}\n Gender: ${selectedIndex === 0 ? 'Male' : 'Female'}\nEmail: ${email}\nPlace of Birth: ${birthPlace}\nAlternative Phone Number: ${altmobileNumber}\nDate of Birth: ${selectedDate.toDateString()}\nTime of Birth: ${selectedTime.toLocaleTimeString()}\n`,
    });
    setName('');
    setEmail('');
    setBirthPlace('');
    setMobileNumber('');
  };
  
  const handleMobileNumberChange = (text) => {
    setMobileNumber(text);
    setMobileNumberError('');
  };
  
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDateConfirm = (date) => {
    hideDatePicker();
    setSelectedDate(date);
  };

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleTimeConfirm = (date) => {
    hideTimePicker();
    setSelectedTime(date);
  };


  return (
    <View>
 <Toast />
      <Header 
      title={'My Profile'} 
      mobileNumber={1234567890}
      />
 
      <ScrollView style={styles.scrollView}>
        <Card>
          <CardSection>
            <InputField label="Name" value={name} setValue={setName} error={nameError} isMandatory
            />
          </CardSection>

          <CardSection>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginVertical: 20 }}>
              <Text h4>Gender</Text>
              <TouchableOpacity
                onPress={() => setIndex(0)}
                style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}
              >
                <CheckBox
                  checked={selectedIndex === 0}
                  onPress={() => setIndex(0)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
                <Text>Male</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setIndex(1)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  checked={selectedIndex === 1}
                  onPress={() => setIndex(1)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
                <Text>Female</Text>
              </TouchableOpacity>
            </View>
          </CardSection>

          <CardSection>
            <InputField label="Email" value={email} setValue={setEmail} isMandatory error={emailError} />
          </CardSection>

          <CardSection>
            <InputField 
            label="Place of Birth" 
            value={birthPlace} 
            isMandatory 
            setValue={setBirthPlace} 
            error={birthPlaceError} />
          </CardSection>

          <InputField
        label="Alternative Phone Number"
        mobileNumber={altmobileNumber}
        setValue={handleMobileNumberChange}
        isMobile
        error={mobileNumberError}
        isMandatory
      
      />

          <CardSection >
            <TouchableOpacity onPress={showDatePicker}>
              <Text h4
                style={{
                  margin: 20,
                }}
              >Date of Birth</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
            />
            <Text
              style={{
                marginLeft: 30
              }}
            >{selectedDate.toDateString()}</Text>
          </CardSection>

          <CardSection>
            <TouchableOpacity onPress={showTimePicker}>
              <Text h4
                style={{
                  margin: 20,
                
                }}
              >Time of Birth</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleTimeConfirm}
              onCancel={hideTimePicker}
            />
            <Text
              style={{
                marginLeft:30
              }}
            >{selectedTime.toLocaleTimeString()}</Text>
          </CardSection>

          <CardSection style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,

          }}>
            <Button
              title="Update Profile"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{
                // marginHorizontal: 50,
                // height: 50,
                // width: 200,
                marginVertical: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={showToast}

            />
          </CardSection>
        </Card>
      </ScrollView>
     
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height:500
  },
  inputContainer: {
    margin: 20,
  },

});

export default MyProfile;

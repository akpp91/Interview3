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


  const [altPhone, setAltPhone] = useState('');
  const [altPhoneError, setAltPhoneError] = useState('');

  const [selectedIndex, setIndex] = useState(0);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const showToast = () => {
    
     // Clear previous error messages
  setNameError('');
  setEmailError('');
  setBirthPlaceError('');
  setAltPhoneError('');
  
    if (!name || !email || !birthPlace || !altPhone) {
      setNameError(!name ? 'Name is required' : '');
      setEmailError(!email ? 'Email is required' : '');
      setBirthPlaceError(!birthPlace ? 'Place of Birth is required' : '');
      setAltPhoneError(!altPhone ? 'Alternative Phone Number is required' : '');

      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Validation Error',
        text2: 'All fields must be filled.',
      });
      return;
    }
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Profile Updated!',
      text2: `Name: ${name}\n Gender: ${selectedIndex === 0 ? 'Male' : 'Female'}\nEmail: ${email}\nPlace of Birth: ${birthPlace}\nAlternative Phone Number: ${altPhone}\nDate of Birth: ${selectedDate.toDateString()}\nTime of Birth: ${selectedTime.toLocaleTimeString()}\n`,
    });
    // Clear the form fields
  setName('');
  setEmail('');
  setBirthPlace('');
  setAltPhone('');
    
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
      <Header title={'My Profile'} />

      <ScrollView style={styles.scrollView}>
        <Card>
          <CardSection>
            <InputField label="Name" value={name} setValue={setName} error={nameError}
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
            <InputField label="Email" value={email} setValue={setEmail}               error={emailError} />
          </CardSection>

          <CardSection>
            <InputField label="Place of Birth" value={birthPlace} setValue={setBirthPlace}               error={birthPlaceError}/>
          </CardSection>

          <CardSection>
            <InputField label="Alternative Phone Number" value={altPhone} setValue={setAltPhone}               error={altPhoneError}
 isMobile/>
          </CardSection>

          <CardSection >
            <TouchableOpacity onPress={showDatePicker}>
              <Text h4 
              style={{    margin: 20,
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
            style={{    marginLeft: 30
            }}
            >{selectedDate.toDateString()}</Text>
          </CardSection>

          <CardSection>
            <TouchableOpacity onPress={showTimePicker}>
              <Text h4
              style={{    margin: 20,
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
            style={{    marginLeft: 30
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
              onPress={ showToast}
              
            />
          </CardSection>
        </Card>
      </ScrollView>
      <Toast/>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: 400,
  },
});

export default MyProfile;

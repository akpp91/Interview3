import { StyleSheet, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Header from '../common/DynamicHeader';
import InputField from '../common/InputField';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckBox, Text } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from '../common/Card';
import { CardSection } from '../common/CardSection';

const MyProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [altPhone, setAltPhone] = useState('');
  const [selectedIndex, setIndex] = React.useState(0);

  return (
    <View>
      <Header title={'My Profile'} />


      <ScrollView style={styles.scrollView}>
<Card>
        <CardSection>
        <InputField label="Name" value={name} setValue={setName} />
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
        <InputField label="Email" value={email} setValue={setEmail} />
        </CardSection>

        <CardSection>
        <InputField label="Place of Birth" value={birthPlace} setValue={setBirthPlace} />
        </CardSection>

        <CardSection>
        <InputField label="Alternative Phone Number" value={altPhone} setValue={setAltPhone} />
        </CardSection>
        
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // flexGrow:1,
    // flex: 1,
    height: 500
    // padding: 20, // adds padding around the content for scrolling space
    // backgroundColor: '#fff', // change this to your desired background color
  },

});

export default MyProfile;

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { Header as HeaderRNE, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Avatar1 from './Avatar';
import Toast from 'react-native-toast-message';


const Header = (props) => {


  const goBack = () => {
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Going Back!',
      text2: `back Button Pressed`,
    });
  };

  

  return (
    <SafeAreaView style={styles.headerContainer}>
      <HeaderRNE
        leftComponent={
          <TouchableOpacity onPress={goBack}>
            <Icon name="arrow-back" size={30} />
          </TouchableOpacity>
        }

        centerComponent={{ text: props.title, style: styles.heading }}
      />
      <Avatar1 />
      <View style={styles.mobileNumberContainer}>
        <Text style={styles.mobileNumberText}>{"+91-"+props.mobileNumber}</Text>
      </View>
      <View style={styles.bottomContainer}>
      </View>
      <Toast />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#397a',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
    height: 310
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    marginTop: 5,
  },

  avatarContainer: {
    alignItems: 'center',
    marginTop: 30
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
  },
  mobileNumberContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  mobileNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;

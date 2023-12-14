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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Icon as MIcon } from 'react-native-vector-icons/MaterialIcons';
import Avatar1 from './Avatar';


const Header = (props) => {


  const goBack = () => {
console.log("go back pressed");
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
    <View style={styles.bottomContainer}>
    </View>      
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
    height: 350
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
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    paddingHorizontal: 16, 
    paddingVertical: 20, 
    alignItems: 'center',
  },
});

export default Header;

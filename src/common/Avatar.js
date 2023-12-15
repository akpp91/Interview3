import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, Alert } from 'react-native';
import { Avatar, Button } from '@rneui/themed';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const Avatar1 = () => {
  const defaultAvatarSource = {
    uri: "https://randomuser.me/api/portraits/men/35.jpg",
  };

  const [avatarSource, setAvatarSource] = useState(defaultAvatarSource);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAvatarPress = () => {
    setModalVisible(true);
  };

  const handleImagePicker = (pickerFunction) => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    pickerFunction(options, (response) => {
      console.log('ImagePicker Response: ', response);

      if (!response.didCancel && !response.error) {
        const source = response.assets[0]?.uri
          ? { uri: response.assets[0].uri }
          : defaultAvatarSource;

        console.log('Selected Image URI: ', source.uri);

        setAvatarSource(source);
        setModalVisible(false);
      }
    });
  };

  const pickImageFromGallery = () => {
    handleImagePicker(launchImageLibrary);
  };

  const pickImageFromCamera = () => {
    handleImagePicker(launchCamera);
  };

  return (
    <View style={styles.avatarContainer}>
      <TouchableOpacity onPress={handleAvatarPress}>
        <Avatar size={150} rounded source={avatarSource} />
      </TouchableOpacity>

      <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Select Image Source</Text>
      <View style={styles.buttonContainer}>
        <Button title="Gallery" onPress={pickImageFromGallery} color="#841584" />
        <Button title="Camera" onPress={pickImageFromCamera} color="#841584" />
        <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
      </View>
    </View>
  </View>
</Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#841584'
  },
  
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default Avatar1;

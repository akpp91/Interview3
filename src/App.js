import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyProfile from './screen/MyProfile'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <View>
          <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaView style={styles.headerContainer}>
        <MyProfile/>
        </SafeAreaView>
        </GestureHandlerRootView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
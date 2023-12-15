  import { StyleSheet, Text, View } from 'react-native'
  import React from 'react'
  import MyProfile from './screen/MyProfile'
  import { GestureHandlerRootView } from 'react-native-gesture-handler';
  import { SafeAreaView } from 'react-native-safe-area-context';
  
  const App = () => {
    return (
      <View>
            <GestureHandlerRootView >
            <SafeAreaView >
             <MyProfile />
          </SafeAreaView>
          </GestureHandlerRootView>
      </View>
    )
  }

  export default App

  const styles = StyleSheet.create({})
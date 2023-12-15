Dependencies:

npm i react-native-gesture-handler
 npm i react-native-safe-area-context
  npm i react-native-linear-gradient
  npm install @rneui/themed @rneui/base
  npm install @rneui/base@edge @rneui/themed@edge

npm install react-native-vector-icons


Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

Edit android/settings.gradle to look like this:
rootProject.name = 'MyApp'

include ':app'

// Add these two lines
include ':react-native-vector-icons'
project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')


npm install react-native-safe-area-context

npm install react-native-image-picker
npm i react-native-modal-datetime-picker @react-native-c
ommunity/datetimepicker

npm i react-native-toast-message





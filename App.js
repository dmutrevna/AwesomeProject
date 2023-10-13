import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'

import Navigation from './Screens/Navigation/Navigation'

const App = () => {
  const [fontsLoaded] = useFonts({
    'r-medium': require('./assets/fonts/Roboto-Medium.ttf'), //500
    'r-regular': require('./assets/fonts/Roboto-Regular.ttf'), //400
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}
export default App

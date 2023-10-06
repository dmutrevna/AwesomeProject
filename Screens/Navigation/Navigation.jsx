import React from 'react'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'

import RegistrationScreen from '../RegistrationScreen/RegistrationScreen'
import LoginScreen from '../LoginScreen/LoginScreen'

const MainStack = createStackNavigator()

const Navigation = () => {
  return (
    <MainStack.Navigator initialRouteName="Registration">
      <MainStack.Screen name="Registration" component={RegistrationScreen} />
      <MainStack.Screen name="Login" component={LoginScreen} />
    </MainStack.Navigator>
  )
}

export default Navigation

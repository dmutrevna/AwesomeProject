import React from 'react'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'

import RegistrationScreen from '../RegistrationScreen/RegistrationScreen'
import LoginScreen from '../LoginScreen/LoginScreen'

const MainStack = createStackNavigator()

const Navigation = () => {
  return (
    <MainStack.Navigator initialRouteName="Registration">
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Registration"
        component={RegistrationScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
    </MainStack.Navigator>
  )
}

export default Navigation

import React from 'react'
import { View } from 'react-native'
import LoginForm from '../LoginForm/LoginForm'
import { gStyle } from '../../styles/styles'
import { ImageBackground } from 'react-native'

const LoginScreen = () => {
  return (
    <View style={gStyle.container}>
      <View>
        <ImageBackground
          source={require('../../assets/img/bgImage.png')}
          style={gStyle.backgroundImage}
        >
          <LoginForm />
        </ImageBackground>
      </View>
    </View>
  )
}

export default LoginScreen

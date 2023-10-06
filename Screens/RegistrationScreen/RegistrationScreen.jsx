import React from 'react'
import { View, ImageBackground } from 'react-native'

import { gStyle } from '../../styles/styles'
import RegistrationForm from '../RegistrationForm/RegistrationForm'

// import image from '.../Images/bgImage.png'

const RegistrationScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require('../../assets/img/bgImage.png')}
        style={gStyle.backgroundImage}
      >
        <RegistrationForm />
      </ImageBackground>
    </View>
  )
}

export default RegistrationScreen

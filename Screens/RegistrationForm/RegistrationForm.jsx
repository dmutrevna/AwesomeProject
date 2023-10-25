import React, { useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { gStyle } from '../../styles/styles'
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const RegistrationForm = () => {
  const navigation = useNavigation()
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [inputStates, setInputStates] = useState({
    login: false,
    email: false,
    password: false,
  })
  const [formData, setFormData] = useState({
    login: '',
    email: '',
    password: '',
  })

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = () => {
    console.log(formData)
    setFormData({
      login: '',
      email: '',
      password: '',
    })
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <View style={gStyle.registerSection}>
          <View style={gStyle.photoBlok}>
            <MaterialCommunityIcons
              name={'plus-circle-outline'}
              style={gStyle.buttonX}
              size={25}
              color="#FF6C00"
              onPress={toggleShowPassword}
            />
          </View>
          <Text style={gStyle.title}>Реєстрація</Text>
          <TextInput
            style={[gStyle.input, inputStates.login && gStyle.inputFocus]}
            placeholder="Логін"
            placeholderTextColor="rgba(189, 189, 189, 1)"
            onFocus={() => setInputStates({ ...inputStates, login: true })}
            onBlur={() => setInputStates({ ...inputStates, login: false })}
            value={formData.login}
            onChangeText={(text) => handleInputChange('login', text)}
          />
          <TextInput
            style={[gStyle.input, inputStates.email && gStyle.inputFocus]}
            placeholder="Адреса електронної пошти"
            placeholderTextColor="rgba(189, 189, 189, 1)"
            onFocus={() => setInputStates({ ...inputStates, email: true })}
            onBlur={() => setInputStates({ ...inputStates, email: false })}
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
          <View style={gStyle.passwordInputContainer}>
            <TextInput
              style={[
                gStyle.input,
                gStyle.lastInput,
                inputStates.password && gStyle.inputFocus,
              ]}
              placeholder="Пароль"
              secureTextEntry={!showPassword}
              placeholderTextColor="rgba(189, 189, 189, 1)"
              value={formData.password}
              onChangeText={(text) => {
                handleInputChange('password', text)
                setPassword(text)
              }}
              onFocus={() => setInputStates({ ...inputStates, password: true })}
              onBlur={() => setInputStates({ ...inputStates, password: false })}
            />
            <MaterialCommunityIcons
              name={!showPassword ? 'eye-off' : 'eye'}
              size={24}
              color="rgba(189, 189, 189, 1)"
              style={gStyle.eyeIcon}
              onPress={toggleShowPassword}
            />
          </View>
          <TouchableOpacity
            style={gStyle.buttonRegister}
            onPress={() => {
              handleSubmit()
              navigation.navigate('PostsScreen')
            }}
          >
            <Text style={gStyle.textButton}>Зареєструватися</Text>
          </TouchableOpacity>
          <View style={gStyle.containerText}>
            <Text style={gStyle.textLogin}>Вже є акаунт? </Text>
            <Text
              style={gStyle.textLogin}
              onPress={() => navigation.navigate('Login')}
            >
              Увійти
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default RegistrationForm

import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { gStyle } from '../../styles/styles'
import { useNavigation } from '@react-navigation/native'

const RegistrationForm = () => {
  const navigation = useNavigation()
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [inputStates, setInputStates] = useState({
    login: false,
    email: false,
    password: false,
  })

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
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
        />
        <TextInput
          style={[gStyle.input, inputStates.email && gStyle.inputFocus]}
          placeholder="Адреса електронної пошти"
          placeholderTextColor="rgba(189, 189, 189, 1)"
          onFocus={() => setInputStates({ ...inputStates, email: true })}
          onBlur={() => setInputStates({ ...inputStates, email: false })}
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
            value={password}
            onChangeText={(text) => setPassword(text)}
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
        <TouchableOpacity style={gStyle.buttonRegister} onPress={() => {}}>
          <Text style={gStyle.textButton}>Зареєструватися</Text>
        </TouchableOpacity>
        <Text style={gStyle.textLogin}>
          Вже є акаунт?{' '}
          <Button title="Увійти" onPress={() => navigation.navigate('Login')} />
        </Text>
      </View>
    </KeyboardAvoidingView>
  )
}

export default RegistrationForm

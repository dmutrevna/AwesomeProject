import React, { useState } from 'react'
import { gStyle } from '../../styles/styles'
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const LoginForm = () => {
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
      <View style={gStyle.loginSection}>
        {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
        <Text style={gStyle.title}>Увійти</Text>
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
          <Text style={gStyle.textButton}>Увійти</Text>
        </TouchableOpacity>
        <View style={gStyle.containerTextLogin}>
          <Text style={gStyle.textLogin}>Немає акаунту? </Text>
          <Text
            style={[gStyle.textLogin, { textDecorationLine: 'underline' }]}
            onPress={() => navigation.navigate('Registration')}
          >
            Зареєструватися
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginForm

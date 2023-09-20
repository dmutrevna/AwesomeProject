import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'

export const RegistrationScreen = () => {
  return (
    <View>
      <Text>Реєстрація</Text>
      <TextInput
        placeholder="Логін"
        style={{ borderWidth: 1, borderColor: 'gray', margin: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Адреса електронної пошти"
        style={{ borderWidth: 1, borderColor: 'gray', margin: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Пароль"
        style={{ borderWidth: 1, borderColor: 'gray', margin: 10, padding: 10 }}
        secureTextEntry={true}
      />
      <Button title="Зареєструватися" onPress={() => {}} />
      <Text>Вже є акаунт? Увійти</Text>
    </View>
  )
}

export default RegistrationScreen

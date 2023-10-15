import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { colors } from '../../assets/styles'

export function LoginInput({ name, value, setValue, secure }: { name: string, value?: string, setValue?: any, secure?: boolean }) {
  return (
    <View style={styles.loginInputWrapper}>
      <Text style={styles.loginInputLabel}>{name}</Text>
      <TextInput secureTextEntry={secure} value={value} onChangeText={setValue} style={styles.loginInput} placeholder={`Enter your ${name}`} placeholderTextColor={colors.grey}  />
    </View>
  )
}

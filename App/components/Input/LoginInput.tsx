import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { colors } from '../../assets/styles'

export function LoginInput() {
  return (
    <View style={styles.loginInputWrapper}>
      <Text style={styles.loginInputLabel}>Name</Text>
      <TextInput style={styles.loginInput} placeholder='Enter your Name' placeholderTextColor={colors.grey}  />
    </View>
  )
}

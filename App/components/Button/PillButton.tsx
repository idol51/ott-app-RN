import React from 'react'
import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { styles } from './styles'

export function PillButton({ children, style, textStyle, onPress }: { children: any, style?: ViewStyle, textStyle?: TextStyle, onPress?: any }) {
  return (
    <TouchableOpacity style={[style, styles.pillButton]} onPress={onPress}>
      <Text style={[textStyle, styles.pillButtonText]}>{children}</Text>
    </TouchableOpacity>
  )
}

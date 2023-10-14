import React from 'react'
import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import { styles } from './styles'

export function PillButton({ children, style, textStyle }: { children: any, style?: ViewStyle, textStyle?: TextStyle }) {
  return (
    <TouchableOpacity style={[style, styles.pillButton]}>
      <Text style={[textStyle, styles.pillButtonText]}>{children}</Text>
    </TouchableOpacity>
  )
}

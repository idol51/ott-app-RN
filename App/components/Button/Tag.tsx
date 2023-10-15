import React from 'react'
import { Text, TouchableOpacity, ViewStyle } from 'react-native'
import { styles } from './styles'

export function Tag({ children, style }: { children: any, style?: ViewStyle }) {
  return (
    <TouchableOpacity style={[styles.tag, style]}>
        <Text style={styles.tagText}>{children}</Text>
    </TouchableOpacity>
  )
}

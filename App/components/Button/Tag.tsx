import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function Tag({ children }: { children: string }) {
  return (
    <TouchableOpacity style={styles.tag}>
        <Text style={styles.tagText}>{children}</Text>
    </TouchableOpacity>
  )
}

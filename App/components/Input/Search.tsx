import React from 'react'
import { Image, TextInput, TextInputChangeEventData, View } from 'react-native'
import { styles } from './styles'
import { colors } from '../../assets/styles'

export default function Search({ value, onChangeText }: { value: string, onChangeText: () => void }) {
  return (
    <View style={styles.searchWrapper}>
      <TextInput 
        style={styles.searchInput} 
        placeholder='Search Here..' 
        placeholderTextColor={colors.grey}
        value={value}
        onChangeText={onChangeText}
      />
      <Image style={styles.searchIcon} source={require('../../assets/images/explore_icon.png')} />
    </View>
  )
}

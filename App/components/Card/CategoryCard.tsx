import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export function CategoryCard({ name, image, onPress }: { name: string, image: any, onPress?: any }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.categoryWrapper}>
        <View style={styles.commonImageWrapper}>
            <Image style={styles.commonImage} source={image} alt='Thumbnail' />
        </View>
        <Text style={styles.commonText}>{name}</Text>
    </TouchableOpacity>
  )
}

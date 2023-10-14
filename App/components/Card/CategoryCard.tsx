import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './styles'

export function CategoryCard({ name, image }: { name: string, image: any }) {
  return (
    <View style={styles.categoryWrapper}>
        <View style={styles.commonImageWrapper}>
            <Image style={styles.commonImage} source={image} />
        </View>
        <Text style={styles.commonText}>{name}</Text>
    </View>
  )
}

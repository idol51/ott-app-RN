import React from 'react'
import { Image, ImageSourcePropType, Text, View } from 'react-native'
import { styles } from './styles'

export function CastCard({ name, image }: { name: string, image: ImageSourcePropType }) {
  return (
    <View style={styles.castWrapper}>
        <View style={styles.commonImageWrapper}>
            <Image style={styles.castImage} source={image} />
        </View>
        <Text style={styles.castText}>{name}</Text>
    </View>
  )
}

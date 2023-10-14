import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './styles'

export function ExploreCard({ image, name }: { image: any, name: string }) {
  return (
    <View style={styles.exploreWrapper}>
        <View style={styles.commonImageWrapper}>
            <Image style={styles.commonImage} source={image} />
        </View>
        <Text style={styles.commonText}>{name}</Text>
    </View>
  )
}

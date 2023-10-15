import React from 'react'
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export function ExploreCard({ image, name, onPress }: { image: ImageSourcePropType, name: string, onPress?: () => void }) {
  return (
    <TouchableOpacity style={styles.exploreWrapper} onPress={onPress}>
        <View style={styles.commonImageWrapper}>
            <Image style={styles.commonImage} source={image} alt='Thumbnail' />
        </View>
        <Text style={styles.commonText}>{name}</Text>
    </TouchableOpacity>
  )
}

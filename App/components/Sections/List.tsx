import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './styles'

export function List({ image, title, descList }: { image: any, title: string, descList: string[] }) {
  return (
    <View style={styles.listWrapper}>
      <Image source={image} style={styles.listIcon} />
      <View style={styles.listDetails}>
        <Text style={styles.listTitle}>{title}</Text>
        { descList.map((desc, i) => (
            <Text key={i} style={styles.listDesc}>{desc}</Text>
        )) }
      </View>
      <Image style={styles.listArrowIcon} source={require('../../assets/images/arrow_left.png')} />
    </View>
  )
}

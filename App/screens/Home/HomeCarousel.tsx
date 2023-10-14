import React from 'react'
import Carousel from 'react-native-reanimated-carousel'
import { Dimensions, Image, Text, View } from 'react-native'
import { colors, fontFamily } from '../../assets/styles'
import { PillButton } from '../../components/Button'
import { styles } from './styles'

const windowWidth = Dimensions.get('window').width

export default function HomeCarousel() {
  return (
    <Carousel
            loop
            autoPlayInterval={2500}
            style={{
                width: windowWidth
            }}
            mode="parallax"
            modeConfig={{
                parallaxScrollingScale: 1,
                parallaxScrollingOffset: 140,
                parallaxAdjacentItemScale: 0.8
            }}
            width={windowWidth}
            height={windowWidth * 1.2}
            autoPlay={true}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            renderItem={({ index }) => (
                <View style={styles.carouselWrapper}>
                    <Image source={require('../../assets/images/sample_poster.png')} style={styles.carouselImage} />
                    <View style={styles.carouselDetails}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.carouselTitle} numberOfLines={1}>John Wick</Text>
                            <Text style={styles.carouselSubTitle} numberOfLines={1}>Chapter 4</Text>
                        </View>
                        <PillButton style={{ paddingHorizontal: 16 }}>Watch Trailer</PillButton>
                    </View>
                    
                </View>
            )}
        />
  )
}

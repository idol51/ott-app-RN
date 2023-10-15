import React from 'react'
import Carousel from 'react-native-reanimated-carousel'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import { colors, fontFamily } from '../../assets/styles'
import { PillButton } from '../../components/Button'
import { styles } from './styles'
import { IMAGE_URL } from '../../config'

const windowWidth = Dimensions.get('window').width

export default function HomeCarousel({ data, navigation }: { data: any[], navigation: any }) {
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
            data={data}
            scrollAnimationDuration={1000}
            renderItem={({ index, item }) => (
                <TouchableOpacity style={styles.carouselWrapper} onPress={() => navigation.navigate('Watch', { movieId: item.id })}>
                    <Image source={{ uri: IMAGE_URL + item.backdrop_path }} style={styles.carouselImage} alt='Thumbnail' />
                    <View style={styles.carouselDetails}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.carouselTitle} numberOfLines={1}>{item.title}</Text>
                            <Text style={styles.carouselSubTitle} numberOfLines={1}>{item.original_title}</Text>
                        </View>
                        <PillButton style={{ paddingHorizontal: 16 }}>
                            <Image style={{ width: 16, height: 16 }} source={require('../../assets/images/video_icon.png')} />
                            {'  Watch Trailer'}
                        </PillButton>
                    </View>
                    
                </TouchableOpacity>
            )}
        />
  )
}

import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { styles } from './styles'
import { CategoryCard } from '../../components/Card'
import { Tag } from '../../components/Button'
import HomeCarousel from './HomeCarousel'
import { IMAGE_URL } from '../../config'

export default function HomeView({ data, navigation }: { data: any, navigation: any }) {
  return (
    <View style={styles.container}>
        <ScrollView>
            <Image style={{ marginHorizontal: 28 }} source={require('../../assets/images/app_logo.png')} />
            <View style={styles.categoriesWrapper}>
                <Tag>Popular</Tag>
                <Tag>Upcoming</Tag>
                <Tag>Top Rated</Tag>
            </View>

            <Text style={styles.heading}>Now Playing</Text>

            <HomeCarousel data={data.nowPlaying} navigation={navigation} />


            <View style={{ marginBottom: 32 }}>
                <Text style={styles.categoryTitle}>Popular</Text>
                <ScrollView contentContainerStyle={styles.scrollView} horizontal>
                    {   data.popular.map((item: any) => (
                        <CategoryCard onPress={() => navigation.navigate('Watch', { movieId: item.id })} key={item.id} name={item.title} image={{ uri: IMAGE_URL + item.backdrop_path }} />
                    ))}
                </ScrollView>
            </View>

            <View style={{ marginBottom: 32 }}>
                <Text style={styles.categoryTitle}>Upcoming</Text>
                <ScrollView contentContainerStyle={styles.scrollView} horizontal>
                    {   data.upcoming.map((item: any) => (
                        <CategoryCard onPress={() => navigation.navigate('Watch', { movieId: item.id })} key={item.id} name={item.title} image={{ uri: IMAGE_URL + item.backdrop_path }} />
                    ))}
                </ScrollView>
            </View>

            <View>
                <Text style={styles.categoryTitle}>Top Rated</Text>
                <ScrollView contentContainerStyle={styles.scrollView} horizontal>
                    {   data.topRated.map((item: any) => (
                        <CategoryCard onPress={() => navigation.navigate('Watch', { movieId: item.id })} key={item.id} name={item.title} image={{ uri: IMAGE_URL + item.backdrop_path }} />
                    ))}
                </ScrollView>
            </View>
            
        </ScrollView>
    </View>
  )
}

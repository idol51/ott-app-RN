import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { styles } from './styles'
import CategoryCard from '../../components/Card/CategoryCard'
import { Tag } from '../../components/Button'

export default function HomeView() {
  return (
    <View style={styles.container}>
        <ScrollView>
            <Image style={{ marginHorizontal: 28 }} source={require('../../assets/images/close_icon.png')} />
            <View style={styles.categoriesWrapper}>
                <Tag>Popular</Tag>
                <Tag>Upcoming</Tag>
                <Tag>Classics</Tag>
                <Tag>Top 10</Tag>
            </View>

            <Text style={styles.heading}>Now Playing</Text>

            <View style={{ marginBottom: 32 }}>
                <Text style={styles.categoryTitle}>Popular</Text>
                <ScrollView contentContainerStyle={styles.scrollView} horizontal>
                    <CategoryCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
                    <CategoryCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
                    <CategoryCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
                    <CategoryCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
                    <CategoryCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
                </ScrollView>
            </View>

            <View style={{ marginBottom: 32 }}>
                <Text style={styles.categoryTitle}>Upcoming</Text>
                <ScrollView contentContainerStyle={styles.scrollView} horizontal>
                    <CategoryCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
                    <CategoryCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
                    <CategoryCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
                    <CategoryCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
                    <CategoryCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
                </ScrollView>
            </View>
            
        </ScrollView>
    </View>
  )
}

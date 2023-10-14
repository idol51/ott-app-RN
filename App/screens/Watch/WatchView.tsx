import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { styles } from './style'
import { CastCard, CategoryCard } from '../../components/Card'
import { Tag } from '../../components/Button'

export default function WatchView() {
  return (
    <View style={styles.container}>
        <Image style={styles.closeIcon} source={require('../../assets/images/close_icon.png')} />
        <ScrollView>
            <View style={styles.detailsWrapper}>
                <View style={{ aspectRatio: 16/9 }}></View>
                <Text style={styles.title}>John Wick: Chapter 4</Text>
                <Text style={styles.duration}><Image source={require('../../assets/images/clock.png')} />{' 2h 50m'}</Text>
                <View style={{ flexDirection: 'row', gap: 16, marginTop: 24 }}>
                    <Tag style={styles.utilButton}><Image style={{ width: 12, height: 12 }} source={require('../../assets/images/download.png')} /> {' Download'}</Tag>
                    <Tag style={styles.utilButton}><Image style={{ width: 12, height: 12 }} source={require('../../assets/images/plus.png')} /> {' My List'}</Tag>
                </View>
                <View style={styles.divider} />
                <ScrollView horizontal contentContainerStyle={styles.tagSection}>
                    <Tag>Action</Tag>
                    <Tag>Thriller</Tag>
                    <Tag>Crime</Tag>
                </ScrollView>
                <View style={styles.ratingSection}>
                    <Text style={styles.ratingText}><Image style={styles.ratingIcon} source={require('../../assets/images/star.png')} /> 8.0(1,024)</Text>
                    <Text style={styles.ratingText}>24 March 2023</Text>
                </View>
                <Text style={styles.descText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum exercitationem consectetur repellat inventore eius hic facilis voluptates qui pariatur veritatis ipsum provident sit, nihil iure esse quod aut tempora. Debitis.</Text>
            </View>
            <View style={{ marginBottom: 32 }}>
                <Text style={styles.moreText}>Top Cast</Text>
                <ScrollView contentContainerStyle={styles.scrollView} horizontal>
                    <CastCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
                    <CastCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
                    <CastCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
                    <CastCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
                    <CastCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
                </ScrollView>
            </View>
            <View style={{ marginBottom: 32 }}>
                <Text style={styles.moreText}>More like This</Text>
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

import React from 'react'
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { CastCard, CategoryCard } from '../../components/Card'
import { Tag } from '../../components/Button'
import { colors, fontSize } from '../../assets/styles'
import VideoPlayer from './VideoPlayer'
import { IMAGE_URL } from '../../config'

const windowWidth = Dimensions.get('window').width


export default function WatchView({ navigation, data, videoKey, castArr, similarArr }: { navigation: any, data: any, videoKey: string, castArr: any[], similarArr: any[] }) {
  return (
    <>
    {   data ?
        <View style={styles.container}>
            <TouchableOpacity style={styles.closeIcon} onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/images/close_icon.png')} />
            </TouchableOpacity>
            <VideoPlayer videoKey={videoKey} />

            <ScrollView>
                <View style={styles.detailsWrapper}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.duration}><Image source={require('../../assets/images/clock.png')} />{'  2h 50m'}</Text>
                    <View style={{ flexDirection: 'row', gap: 16, marginTop: 24 }}>
                        <Tag style={styles.utilButton}><Image style={{ width: 12, height: 12 }} source={require('../../assets/images/download.png')} /> {' Download'}</Tag>
                        <Tag style={styles.utilButton}><Image style={{ width: 12, height: 12 }} source={require('../../assets/images/plus.png')} /> {' My List'}</Tag>
                    </View>
                    <View style={styles.divider} />
                    <ScrollView horizontal contentContainerStyle={styles.tagSection}>
                        {   data.genres.map(({ id, name }: { id: number, name: string }) => (
                            <Tag key={id}>{name}</Tag>
                        ))}
                    </ScrollView>
                    <View style={styles.ratingSection}>
                        <Text style={styles.ratingText}><Image style={styles.ratingIcon} source={require('../../assets/images/star.png')} />{` ${data.vote_average.toFixed(1)} (${data.vote_count})`}</Text>
                        <Text style={styles.ratingText}>{data.release_date}</Text>
                    </View>
                    <Text style={styles.descText}>{data.overview}</Text>
                </View>
                <View style={{ marginBottom: 32 }}>
                    <Text style={styles.moreText}>Top Cast</Text>
                    <ScrollView contentContainerStyle={styles.scrollView} horizontal>
                        {   castArr.map((cast) => (
                            <CastCard key={cast.id} name={cast.name} image={{ uri: IMAGE_URL + cast.profile_path }} />
                        ))}
                    </ScrollView>
                </View>
                <View style={{ marginBottom: 32 }}>
                    <Text style={styles.moreText}>More like This</Text>
                    <ScrollView contentContainerStyle={styles.scrollView} horizontal>
                        {   similarArr.map((similar: any) => (
                            <CategoryCard name={similar.title} image={{ uri: IMAGE_URL + similar.poster_path }} onPress={() => navigation.setParams({ movieId: similar.id })} />
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>:
        <View style={[styles.container, { alignItems: 'center', paddingVertical: 48 }]}>
            <Text style={{ fontSize: fontSize.f1, color: colors.text }}>Data not Found !</Text>
        </View>
    }
    </>
  )
}

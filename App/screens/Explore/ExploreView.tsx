import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { styles } from './styles'
import Search from '../../components/Input/Search'
import { ExploreCard } from '../../components/Card'
import { colors, fontSize } from '../../assets/styles'
import { BASE_URL, IMAGE_URL } from '../../config'

export interface ExploreViewProps {
  searchVal: string,
  setSearchVal: any,
  movieArr: any[],
  navigation: any
}

export default function ExploreView({ searchVal, setSearchVal, movieArr, navigation }: ExploreViewProps) {
  return (
    <View style={styles.container}>
      <Search value={searchVal} onChangeText={setSearchVal} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        { movieArr.length !== 0 ? movieArr.map((data) => (
          <ExploreCard key={data.id} name={data.title} image={{ uri: IMAGE_URL + data.backdrop_path }} onPress={() => navigation.navigate('Watch', { movieId: data.id })} />
        )) :
          <Text style={{ color: colors.text, fontSize: fontSize.f1 }}>No Data Found!</Text>
        }
      </ScrollView>
    </View>
  )
}

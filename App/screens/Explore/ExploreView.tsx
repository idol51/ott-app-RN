import React from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from './styles'
import Search from '../../components/Input/Search'
import { ExploreCard } from '../../components/Card'

export default function ExploreView() {
  return (
    <View style={styles.container}>
      <Search />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ExploreCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
        <ExploreCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
        <ExploreCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
        <ExploreCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
        <ExploreCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
        <ExploreCard name='Avengers' image={require('../../assets/images/sample_poster.png')} />
      </ScrollView>
    </View>
  )
}

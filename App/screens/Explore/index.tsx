import React, { useEffect, useState } from 'react'
import ExploreView from './ExploreView'
import { searchMovieApi } from '../../services/explore';
import { Alert } from 'react-native';
import { debounce } from '../../utils';
import { NavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export default function Explore({ navigation }: { navigation: any }) {
  const [ searchVal, setSearchVal ] = useState<string>('');
  const [ movieArr, setMovieArr ] = useState<any[]>([]);

  const getMovieData = debounce(async (query: string) => {
    try {
      const data = await searchMovieApi(query);

      setMovieArr(data.data.results)
    }
    catch (err) {
      Alert.alert('Error while fetching data!')
    }
  }, 300)

  useEffect(() => {
    getMovieData(searchVal)
  }, [searchVal])

  return (
    <ExploreView
      searchVal={searchVal}
      setSearchVal={setSearchVal}
      movieArr={movieArr}
      navigation={navigation}
    />
  )
}

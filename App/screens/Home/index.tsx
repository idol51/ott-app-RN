import React, { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import HomeView from './HomeView'
import { getNowPlayingApi, getPopularApi, getTopRatedApi, getUpcomingApi } from '../../services/home';

export default function Home({ navigation }: { navigation: any }) {
  const [ allData, setAllData ] = useState({
    nowPlaying: [],
    popular: [],
    upcoming: [],
    topRated: []
  });

  const getNowPlaying = async () => {
    try {
      const data = await getNowPlayingApi();
      setAllData((prev) => ({ ...prev, nowPlaying: data.data.results }))
    }
    catch (err) {
      Alert.alert('Error while getting now playing!');
    }
  }

  const getPopular = async () => {
    try {
      const data = await getPopularApi();
      setAllData((prev) => ({ ...prev, popular: data.data.results }))
    }
    catch (err) {
      Alert.alert('Error while getting popular!');
    }
  }

  const getUpcoming = async () => {
    try {
      const data = await getUpcomingApi();
      setAllData((prev) => ({ ...prev, upcoming: data.data.results }))
    }
    catch (err) {
      Alert.alert('Error while getting upcoming!');
    }
  }

  const getTopRated = async () => {
    try {
      const data = await getTopRatedApi();
      setAllData((prev) => ({ ...prev, topRated: data.data.results }))
    }
    catch (err) {
      Alert.alert('Error while getting top rated!');
    }
  }

  useEffect(() => {
    getNowPlaying();
    getPopular();
    getUpcoming();
    getTopRated();
  }, [])

  return (
    <HomeView
      data={allData}
      navigation={navigation}
    />
  )
}

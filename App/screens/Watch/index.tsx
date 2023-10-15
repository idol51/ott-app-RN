import React, { useEffect, useState } from 'react'
import WatchView from './WatchView'
import { getCastApi, getMovieDataApi, getSimilarApi, getVideosApi } from '../../services/watch';
import { Alert } from 'react-native';

export default function Watch({ navigation, route }: { navigation: any, route: any }) {
  const { movieId } = route.params;

  const [ movieData, setMovieData ] = useState<any>(null)
  const [ castData, setCastData ] = useState<any[]>([])
  const [ similarData, setSimilarData ] = useState<any[]>([])
  const [ videoKey, setVideoKey ] = useState<string>('')

  const getMovieData = async (id: number) => {
    try {
      const data = await getMovieDataApi(id);

      setMovieData(data.data)  
      console.log(data.data);
          
    }
    catch (err) {
      Alert.alert('Error while fetching Movie details')
    }
  }

  const getCastData = async (id: number) => {
    try {
      const data = await getCastApi(id);

      setCastData(data.data.cast);
    }
    catch (err) {
      Alert.alert('Error while fetching Cast details')
    }
  }

  const getVideoKey = async (id: number) => {
    try {
      const data = await getVideosApi(id);

      if ( data.data.results.length > 0 ) {
        setVideoKey(data.data.results[0].key)
        console.log(data.data.results[0].key);
        
      }
      else {
        Alert.alert('No related videos found!');
      }
    }
    catch (err) {
      Alert.alert('Error will fetching video!')
    }
  }

  const getSimilarData = async (id: number) => {
    try {
      const data = await getSimilarApi(id);

      setSimilarData(data.data.results);
    }
    catch (err) {
      Alert.alert('Error will similar movie!')
    }
  }

  useEffect(() => {
    getMovieData(movieId);
    getVideoKey(movieId);
    getCastData(movieId);
    getSimilarData(movieId);

    return () => {
      setMovieData(null);
      setVideoKey('')
    }
  }, [movieId])
  

  return (
    <WatchView
      navigation={navigation}
      data={movieData}
      castArr={castData}
      videoKey={videoKey}
      similarArr={similarData}
    />
  )
}

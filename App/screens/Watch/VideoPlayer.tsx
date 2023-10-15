import React from 'react'
import { View } from 'react-native'
import Video from 'react-native-video'
import { styles } from './style'
import YouTube from 'react-native-youtube'

export default function VideoPlayer({ videoKey }: { videoKey: string }) {
  
  return (
    <View style={styles.videoPlayer}>
      {/* <Video
        src={{ uri: `https://www.youtube.com/watch?v=PARfU2Vi694` }}
        videoHeight={200}
        videoWidth={400}
      /> */}
      <YouTube
        videoId='PARfU2Vi694'
        apiKey='AIzaSyAWGjQiP6Bz3p4U5DNTh9XNJAmgpZuUqKw'
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  )
}

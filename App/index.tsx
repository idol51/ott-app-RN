import React from 'react'
import Routes from './routes'
import { StatusBar } from 'react-native'
import { colors } from './assets/styles'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>    
      <StatusBar backgroundColor={colors.background} />
      <Routes />
    </GestureHandlerRootView>
  )
}

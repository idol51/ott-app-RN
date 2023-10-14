import React from 'react'
import Routes from './routes'
import { StatusBar } from 'react-native'
import { colors } from './assets/styles'

export default function App() {
  return (
  <>
    <StatusBar backgroundColor={colors.background} />
    <Routes />
  </>
  )
}

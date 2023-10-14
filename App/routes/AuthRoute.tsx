import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../screens/Login';

const { Navigator, Screen } = createNativeStackNavigator();

export default function AuthRoute() {
  return (
    <Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Screen
        name='Login'
        component={Login}
      />
    </Navigator>
  )
}

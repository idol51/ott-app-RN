import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeRoute from './HomeRoute';
import Watch from '../screens/Watch';

const { Navigator, Screen } = createNativeStackNavigator();

export default function UserRoute() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name='Watch'
        component={Watch}
      />
      <Screen
        name='HomeRoute'
        component={HomeRoute}
        options={{
            headerShown: false
        }}
      />
    </Navigator>
  )
}

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeRoute from './HomeRoute';

const { Navigator, Screen } = createNativeStackNavigator();

export default function UserRoute() {
  return (
    <Navigator>
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

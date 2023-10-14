import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import UserRoute from './UserRoute';
import AuthRoute from './AuthRoute';

export default function Routes() {
    const isSignIn = true;
  return (
    <NavigationContainer>
      { isSignIn ? <UserRoute /> : <AuthRoute /> }
    </NavigationContainer>
  )
}

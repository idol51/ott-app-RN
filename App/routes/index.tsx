import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import UserRoute from './UserRoute';
import AuthRoute from './AuthRoute';
import { useUserContext } from '../context/UserContext';

export default function Routes() {
    const { isSignedIn } = useUserContext();
  return (
    <NavigationContainer>
      { isSignedIn ? <UserRoute /> : <AuthRoute /> }
    </NavigationContainer>
  )
}

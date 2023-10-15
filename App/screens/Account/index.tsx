import React from 'react'
import { View } from 'react-native'
import AccountView from './AccountView'
import { useUserContext } from '../../context/UserContext'

export default function Account() {
  const { setIsSignedIn, userName } = useUserContext();

  return (
    <AccountView
      userName={userName}
      onLogOut={() => setIsSignedIn(false)}
    />
  )
}

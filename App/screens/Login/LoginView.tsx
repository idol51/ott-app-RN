import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { PillButton } from '../../components/Button'
import { colors, fontFamily, fontSize } from '../../assets/styles'
import { LoginInput } from '../../components/Input'

export default function LoginView() {
  return (
    <View style={styles.container}>
        <View style={styles.loginWrapper}>
            <Text style={styles.heading}>Log In</Text>
            <LoginInput />
            <LoginInput />
        </View>
        <View style={styles.bottomSection}>
            <PillButton>
                Log In
            </PillButton>
            <Text
                style={[{ fontFamily: fontFamily.medium}, styles.bottomText]}
            >
                Don't have an account ? 
                <Text 
                    style={{ fontFamily: fontFamily.semibold, paddingStart: 8 }}
                >
                    {' Sign Up'}
                </Text>
            </Text>
        </View>
    </View>
  )
}

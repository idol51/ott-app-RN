import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { styles } from './styles'
import { PillButton } from '../../components/Button'
import { colors, fontFamily, fontSize } from '../../assets/styles'
import { LoginInput } from '../../components/Input'
import auth from '@react-native-firebase/auth'
import { useUserContext } from '../../context/UserContext'

export default function LoginView() {
    const { setIsSignedIn, setUserName } = useUserContext();

    const [ name, setName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const handleLogIn = async () => {
        try {
            if ( email.length === 0 || password.length === 0 ) {
                Alert.alert('Please fill all the details!');
                return
            }
            
            const res = await auth().createUserWithEmailAndPassword(email, password);

            setUserName(name);
            setIsSignedIn(true);
        }
        catch (err: any) {
            Alert.alert(err.code);
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.loginWrapper}>
            <Text style={styles.heading}>Log In</Text>
            <LoginInput name='Name' value={name} setValue={setName} />
            <LoginInput name='Email' value={email} setValue={setEmail} />
            <LoginInput name='Password' value={password} setValue={setPassword} secure />
        </View>
        <View style={styles.bottomSection}>
            <PillButton onPress={handleLogIn}>
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

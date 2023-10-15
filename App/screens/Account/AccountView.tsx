import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './styles'
import { List } from '../../components/Sections'
import { PillButton } from '../../components/Button'

export default function AccountView({ userName, onLogOut }: { userName: string, onLogOut: any }) {
  return (
    <View style={styles.container}>
        <View style={styles.profileWrapper}>
            <Image style={styles.closeButton} source={require('../../assets/images/close_icon.png')} />
            <Text style={styles.heading}>My Profile</Text>
            <Image 
                source={{
                    uri: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1'
                }} 
                style={styles.profilePic}
            />
            <Text style={styles.userName}>{userName}</Text>
        </View>
        <View style={{ flex: 1 }}>
            <List 
                title='Account'
                descList={['Edit Profile','Change Password']}
                image={require('../../assets/images/account_icon.png')}
            />
            <List 
                title='Settings'
                descList={['Themes','Permissions']}
                image={require('../../assets/images/settings_icon.png')}
            />
        </View>
        <PillButton onPress={onLogOut}>Log Out</PillButton>
    </View>
  )
}

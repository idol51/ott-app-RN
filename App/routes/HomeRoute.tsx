import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Account from '../screens/Account';
import { styles } from './styles';
import { Image, View } from 'react-native';
import { colors } from '../assets/styles';

const { Navigator, Screen } = createBottomTabNavigator();

export default function HomeRoute() {
    const iconRenderer = ({ icon, focused, color, size }: { icon: any, focused: boolean, color: string, size: number }) => {
        return (
            <View style={[styles.tabBarIconWrapper, { backgroundColor: focused ? colors.secondary : colors.background }]}>
                <Image source={icon} />
            </View>
        )
    }

  return (
    <Navigator
        screenOptions={{
            headerShown: false,
            tabBarStyle: styles.bottomTab,
            tabBarShowLabel: false
        }}
    >
      <Screen
        name='Home'
        component={Home}
        options={{
            tabBarIcon: (props) => iconRenderer({ icon: require('../assets/images/home_icon.png'), ...props })
        }}
      />
      <Screen
        name='Explore'
        component={Explore}
        options={{
            tabBarIcon: (props) => iconRenderer({ icon: require('../assets/images/explore_icon.png'), ...props })
        }}
      />
      <Screen
        name='Account'
        component={Account}
        options={{
            tabBarIcon: (props) => iconRenderer({ icon: require('../assets/images/account_icon.png'), ...props })
        }}
      />
    </Navigator>
  )
}

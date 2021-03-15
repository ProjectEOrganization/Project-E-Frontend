import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View } from 'react-native'
import Login from '../Auth/Login'

export default function LoginModal() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Login />
        </View>
    )
}

import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import Register from '../Auth/Register'
const { width, height } = Dimensions.get('screen');

export default function RegisterModal() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ zIndex: 999 }}>
                <Register />
            </View>
            <View onTouchStart={navigation.goBack} style={{ width, height, position: 'absolute' }} />
        </View>
    )
}

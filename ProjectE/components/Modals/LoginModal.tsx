import { useNavigation, useRoute } from '@react-navigation/core'
import React from 'react'
import { Dimensions, View } from 'react-native'
import Login from '../Auth/Login'
const { width, height } = Dimensions.get('screen');

export default function LoginModal() {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ zIndex: 999 }}>
                <Login actionAfter={route.params?.actionAfter} />
            </View>
            <View onTouchStart={navigation.goBack} style={{ width, height, position: 'absolute' }} />
        </View>
    )
}

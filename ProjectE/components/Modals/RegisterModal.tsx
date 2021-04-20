import { useNavigation, useRoute } from '@react-navigation/core'
import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import Register from '../Auth/Register'
const { width, height } = Dimensions.get('screen');

export default function RegisterModal() {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ zIndex: 999 }}>
                <Register actionAfter={route.params?.actionAfter} />
            </View>
            <View onTouchStart={navigation.goBack} style={{ width, height, position: 'absolute' }} />
        </View>
    )
}

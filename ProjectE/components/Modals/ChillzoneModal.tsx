import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Dimensions, View } from 'react-native'

import Chillzone from '../Auth/Chillzone'
const { width, height } = Dimensions.get('screen');

export default function ChillzoneModal() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ zIndex: 999 }}>
                <Chillzone />
            </View>
            <View onTouchStart={navigation.goBack} style={{ width, height, position: 'absolute' }} />
        </View>
    )
}

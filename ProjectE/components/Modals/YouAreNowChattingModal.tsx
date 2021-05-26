import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Dimensions, View } from 'react-native'
import YouAreNowChattingAlert from '../Alerts/YouAreNowChattingAlert'
const { width, height } = Dimensions.get('screen');

export default function YouAreNowChattingModal() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ zIndex: 999 }}>
                <YouAreNowChattingAlert />
            </View>
            <View  style={{ width, height, position: 'absolute' }} />
        </View>
    )
}

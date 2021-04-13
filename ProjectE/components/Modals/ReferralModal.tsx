import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Dimensions, View } from 'react-native'

import Referral from '../Auth/Referral';
const { width, height } = Dimensions.get('screen');

export default function ReferralModal() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ zIndex: 999 }}>
                <Referral />
            </View>
            <View onTouchStart={navigation.goBack} style={{ width, height, position: 'absolute' }} />
        </View>
    )
}

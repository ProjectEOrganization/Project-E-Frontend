import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Dimensions, View } from 'react-native'
import YouAreNowFriendsAlert from '../Alerts/YouAreNowFriendsAlert'
const { width, height } = Dimensions.get('screen');

export default function YouAreNowFriendsModal() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ zIndex: 999 }}>
                <YouAreNowFriendsAlert />
            </View>
            <View onTouchStart={navigation.goBack} style={{ width, height, position: 'absolute' }} />
        </View>
    )
}

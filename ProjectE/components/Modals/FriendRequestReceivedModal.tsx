import { useNavigation, useRoute } from '@react-navigation/core'
import React from 'react'
import { Dimensions, View } from 'react-native'
import FriendRequestReceivedAlert from '../Alerts/FriendRequestReceivedAlert'
const { width, height } = Dimensions.get('screen');

export default function FriendRequestReceivedModal() {
    const navigation = useNavigation();
    const { params } = useRoute();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ zIndex: 999 }}>
                <FriendRequestReceivedAlert friendId={params.uid} />
            </View>
            <View onTouchStart={navigation.goBack} style={{ width, height, position: 'absolute' }} />
        </View>
    )
}

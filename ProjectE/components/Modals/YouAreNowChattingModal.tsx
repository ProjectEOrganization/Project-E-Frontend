import { useNavigation, useRoute } from '@react-navigation/core'
import React from 'react'
import { Dimensions, View } from 'react-native'
import YouAreNowChattingAlert from '../Alerts/YouAreNowChattingAlert'
const { width, height } = Dimensions.get('screen');

export default function YouAreNowChattingModal() {
    const navigation = useNavigation();
    const route = useRoute();
    console.log(route.params);
    // if (route.params.msg!=undefined) {
    //     console.log("paramsss", params.msg);
    //     var message = params.msg;
    // }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ zIndex: 999 }}>
                <YouAreNowChattingAlert msg={route.params?.msg} />
            </View>
            <View style={{ width, height, position: 'absolute' }} />
        </View>
    )
}

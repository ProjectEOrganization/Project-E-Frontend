import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Dimensions, View } from 'react-native'
import { Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import LoginSvgComponent from '../../assets/loginSvgComponent.js';
import { navigationRef } from '../../navigation';
import ReportBlockAlert from '../Alerts/ReportBlockAlert.tsx';
import YouAreNowFriendsAlert from '../Alerts/YouAreNowFriendsAlert'
const { width, height } = Dimensions.get('screen');


export default function ReportBlockModal() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ zIndex: 999 }}>
          <ReportBlockAlert />
          </View>
            <View onTouchStart={navigation.goBack} style={{ width, height, position: 'absolute' }} />
        </View>
        






    )
}






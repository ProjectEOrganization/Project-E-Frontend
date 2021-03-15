import React from 'react'
import { View, Text } from 'react-native'
import Register from '../Auth/Register'

export default function RegisterModal() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Register />
        </View>
    )
}

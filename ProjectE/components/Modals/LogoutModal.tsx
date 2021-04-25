import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Dimensions, View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native';
import LoginSvgComponent from '../../assets/loginSvgComponent.js';
import { useAuth } from '../../services/auth';
import { leaveQueue } from '../../store/reducers/chat';
import { store } from '../../store';

import Chillzone from '../Auth/Chillzone'
const { width, height } = Dimensions.get('screen');

export default function LogoutModal() {
    const navigation = useNavigation();
    const auth = useAuth();

      const logout = async () => {
        await store.dispatch(leaveQueue());
        setTimeout(() => {
          auth.signout()
        }, 500);
      }
  
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ zIndex: 999 }}>
            <View style={styles.overallContainer}>
      <LoginSvgComponent />
      <View style={{ width: 260, paddingTop: 30 }}>
        <Text style={styles.firstText}>Logout</Text>
        {/* PROBABLY NEED AN IF STATEMENT (like if on certain page, display different text below) */}
        <Text style={styles.secondText}>
          Click below to sign out of your account.
        </Text>
       

        <TouchableOpacity onPress={logout} style={styles.loginButton}>
          <Text style={styles.loginText}>Logout</Text>
        </TouchableOpacity>
      </View>

    </View>
  
            </View>
            <View onTouchStart={navigation.goBack} style={{ width, height, position: 'absolute' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    overallContainer: {
      //overall container
      height: 240,
      width: 330,
      backgroundColor: '#fff',
      borderRadius: 40,
      alignItems: 'center',
      shadowOffset: { width: 0, height: 1 },
      shadowColor: '#000000',
      shadowOpacity: 0.05,
    },
    firstText: {
      fontSize: 22,
      fontFamily: 'Inter-ExtraBold',
      color: 'red',
    },
    secondText: {
      fontSize: 17,
      fontFamily: 'Inter-Medium',
      color: '#A9ACB0',
      paddingTop: 15,
      lineHeight: 23,
    },
    loginButton: {
      backgroundColor: '#4B00FF',
      borderRadius: 6,
      height: 50,
      marginTop: 40,
      shadowOffset: { width: 0, height: 2 },
      shadowColor: '#4B00FF',
      shadowOpacity: 0.27,
      justifyContent: 'center',
    },
    loginText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 18,
      fontFamily: 'Inter-Bold',
    },
  });
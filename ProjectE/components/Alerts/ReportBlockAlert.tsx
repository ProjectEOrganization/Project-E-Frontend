import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LoginSvgComponent from '../../assets/loginSvgComponent.js';

import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
import { useNavigation } from '@react-navigation/core'
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View, TextInput } from 'react-native'
import { navigationRef } from '../../navigation/index';

export default function ReportBlockAlert({ path }: { path: string }) {
  const navigation = useNavigation();
  return (
  <View style={styles.overallContainer}>
<LoginSvgComponent />
<View style={{ width: 260, paddingTop: 30, alignItems: 'center' }}>
<Text style={styles.firstText}>
Report or Block
</Text>

{/* PROBABLY NEED AN IF STATEMENT (like if on certain page, display different text below) */}
<Text style={styles.secondText}>
This person is offensive, choose to report or block this user.
</Text>


<TouchableOpacity onPress={() => navigation.navigate('ReportDetailModal')} style={styles.loginButton}>
<Text style={styles.loginText} >
Report
</Text>
</TouchableOpacity>

<TouchableOpacity  style={styles.loginButton1}>
<Text style={styles.loginText} >
Block
</Text>
</TouchableOpacity>

</View>
</View>

);
}

const styles = StyleSheet.create({
    overallContainer: { //overall container
      height: 300,
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
      color: '#4957FF',
    },
    secondText: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      color: '#A9ACB0',
      paddingTop: 15,
      lineHeight: 23,
      textAlign: 'center'
    },
    loginButton: {
      backgroundColor: '#FF7F7F',
      borderRadius: 6,
      height: 50,
      marginTop: 35,
      shadowOffset: { width: 0, height: 2 },
      shadowColor: '#FF7F7F',
      shadowOpacity: 0.27,
      justifyContent: 'center',
      width: '100%'
  
    },
    loginButton1: {
        backgroundColor: '#8b0000',
        borderRadius: 6,
        height: 50,
        marginTop: 15,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#FF7F7F',
        shadowOpacity: 0.27,
        justifyContent: 'center',
        width: '100%'
    
      },
    loginText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 18,
      fontFamily: 'Inter-Bold',
  
    }
  
  
  
  });
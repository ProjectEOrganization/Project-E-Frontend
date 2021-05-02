import { useNavigation, useRoute } from '@react-navigation/core'
import React from 'react'
import { Dimensions, View } from 'react-native'
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import LoginSvgComponent from '../../assets/loginSvgComponent.js';
import { Text,  TextInput } from 'react-native'
import Login from '../Auth/Login'
const { width, height } = Dimensions.get('screen');

export default function ChooseProfileModal() {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ zIndex: 999 }}>
                
            <View style={styles.overallContainer}>


<LoginSvgComponent />
<View style={{ width: 260, paddingTop: 30, alignItems: 'center' }}>
  

  <View style={{ flex: 1, flexDirection: 'row' }}>

        <Image  style={{
        width: 80,
        height: 80,
    marginHorizontal: 10}}

        source={ require('../../assets/images/Profile-Male-PNG.png')}
        />

        <Image  style={{
       width: 80,
       height: 80,
       marginHorizontal: 10}}
      
       source={ require('../../assets/images/Profile-Male-PNG.png')}
       />

        <Image  style={{
       width: 80,
       height: 80,
       marginHorizontal: 10}}
      
       source={ require('../../assets/images/Profile-Male-PNG.png')}
       />



  </View>

</View>

</View>

            </View>
            <View onTouchStart={navigation.goBack} style={{ width, height, position: 'absolute' }} />
        </View>
    )
}


const styles = StyleSheet.create({
    overallContainer: { //overall container
      height: 555,
      width: 350,
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
      textAlign: 'center',
      lineHeight: 30
    },
    secondText: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      color: '#A9ACB0',
      paddingTop: 15,
      lineHeight: 23,
      textAlign: 'center'
    },
    yesButton: {
      backgroundColor: '#3CDF7C',
      borderRadius: 6,
      height: 75,
      marginTop: 35,
      shadowOffset: { width: 2, height: 6 },
      shadowColor: '#3CDF7C',
      shadowOpacity: 0.27,
      justifyContent: 'center',
      width: 110,
      marginRight: 30
  
    },
    noButton: {
      backgroundColor: '#F24646',
      borderRadius: 6,
      height: 75,
      marginTop: 35,
      shadowOffset: { width: 2, height: 6 },
      shadowColor: '#F24646',
      shadowOpacity: 0.27,
      justifyContent: 'center',
      width: 110
  
    },
    loginText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      fontFamily: 'Inter-Bold',
  
    }
  
  
  
  });
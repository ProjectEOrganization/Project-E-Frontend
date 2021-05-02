import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useFonts } from 'expo-font';
import SvgComponent from '../assets/svgComponent.js';
import SvgComponent1 from '../assets/svgComponent1.js';
import OnBoardingSvgComponent2 from '../assets/onBoardingSvgComponent2.js';
import Navigation from '../navigation';

import { useNavigation } from '@react-navigation/native';
import TabOneScreen from './FriendsScreen';
import { useAuth } from '../services/auth';

// import * as yourModuleName from 'module-name';



export default function TabThreeScreen() {
  const auth = useAuth();

  async function anonymousSignin() {
    await auth.signInAnonymously()
    navigation.navigate('RandomChat');
  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      {/* <Text style={styles.title2}>Rapid</Text> */}
      {/* <SvgComponent /> */}

      <OnBoardingSvgComponent2 />
      {/* <Text style={styles.title1}>ONBOARDING 2 {"\n"}TO RAPID</Text> */}

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}


      <Text style={styles.title1}>CHOOSE</Text>
      <Text style={styles.title2}>YOU</Text>
      
      <TouchableOpacity style={styles.yesButton} onPress={() => navigation.navigate('LoginModal')}>
            <Text style={styles.loginText}>
              Let's Go!
          </Text>
          </TouchableOpacity>

      {/* <View style={styles.container2}>
        <Text style={styles.title3}>
          Chat with random people and create
          everlasting friendships,
        <Text style={{ fontWeight: 'bold' }}> click below </Text>

        </Text >
      </View>

      <TouchableOpacity onPress={anonymousSignin}>
        <SvgComponent1 />
      </TouchableOpacity> */}



      {/* <View style={styles.container3}>
        <Text style={styles.title4}>
          Already have an account?
        <Text onPress={() => navigation.navigate('LoginModal')} style={{ fontFamily: 'Inter-SemiBold', color: '#4B00FF' }}> Log in </Text> */}
          {/* <Text onPress={anonymousSignin} style={{fontFamily: 'Inter-SemiBold', color: '#4B00FF'}}> Log in as a guest</Text> */}
        {/* </Text >
      </View> */}



    </View>
  );
}

const styles = StyleSheet.create({
  container: { // overall container
    flex: 1,
    alignItems: 'center',
    marginTop:-850,
    paddingLeft: 580,
    backgroundColor: '#FFFFFF'
  },
  
  title1: { //Welcome to
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'right',
    fontFamily: 'Inter-ExtraBold',
    color: '#4957FF',
    letterSpacing: 1,
    position: 'absolute',
    top: 1100, 
    left: 20
  },
  title2: { //Welcome to
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'right',
    fontFamily: 'Inter-ExtraBold',
    color: '#4957FF',
    letterSpacing: 1,
    position: 'absolute',
    top: 1140, 
    left: 110
  },
  yesButton: {
    backgroundColor: '#50E3C2',
    borderRadius: 15,
    height: 75,
    marginTop: 55,
    marginLeft: 70,
    shadowOffset: { width: 2, height: 6 },
    shadowColor: '#50E3C2',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    width: 250,
    

  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Inter-ExtraBold',

  }

  
});

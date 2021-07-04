import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useFonts } from 'expo-font';
import SvgComponent from '../assets/svgComponent.js';
import SvgComponent1 from '../assets/svgComponent1.js';
import OnBoardingSvgComponent from '../assets/onBoardingSvgComponent.js';
import Navigation from '../navigation';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';
import TabOneScreen from './FriendsScreen';
import { useAuth } from '../services/auth';

// import * as yourModuleName from 'module-name';



export default function TabTwoScreen() {
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
      <OnBoardingSvgComponent />
      <Text style={styles.title1}>WELCOME {"\n"}TO RAPID</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      
      
      <TouchableOpacity  onPress={() => navigation.navigate('Onboarding2')}>
      <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#B3ECAE', '#00DBD0']}
      style={styles.yesButton}
    >
            <Text style={styles.loginText}>
              Let's Go!
          </Text>
          </LinearGradient>
          </TouchableOpacity>

          <Text style={{marginLeft: 70, marginTop: 40}}>
          <Text style={[styles.termsText, {marginTop: 40}]}>
          By logging in or signing up, you agree to our {''}
          </Text>
          <Text style={[styles.termsText, {color: '#A6CCF9', fontFamily: 'Inter-ExtraBold'} ]}>
          Terms of Use
          </Text>
          </Text>

          <Text style={{marginLeft: 70, marginTop: 5}}>
          <Text style={[styles.termsText, {marginTop: 5}]}>
          and have read and understood our {''}
          </Text>
          <Text style={[styles.termsText, {color: '#A6CCF9', fontFamily: 'Inter-ExtraBold'} ]}>
          Privacy Policy
          </Text>
          </Text>
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
    marginTop:-140,
    marginLeft: -69,
    backgroundColor: '#395EEE'
  },
  container2: { //text part
    flex: 1,
    width: 300,

    justifyContent: 'center',
    paddingTop: '13%',

    backgroundColor: '#F5F7F9',
    flexDirection: 'row'
  },
  container3: { //bottom login text part
    flex: 1,
    width: 300,

    justifyContent: 'center',


    backgroundColor: '#F5F7F9',
    flexDirection: 'row'
  },
  title1: { //Welcome to
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Inter-ExtraBold',
    color: '#FFFFFF',
    letterSpacing: 1,
    position: 'absolute',
    top: 420, 
    left: 173
  },
  yesButton: {
    backgroundColor: '#50E3C2',
    borderRadius: 25,
    height: 75,
    marginTop: -10,
    marginLeft: 70,
    shadowOffset: { width: 2, height: 6 },
    shadowColor: '#50E3C2',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    width: 280,
    

  },
  loginText: {
    color: '#15154E',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Inter-ExtraBold',

  },
  termsText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 70,
    
   

  }

  
});

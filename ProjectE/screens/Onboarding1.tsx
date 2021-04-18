import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useFonts } from 'expo-font';
import SvgComponent from '../assets/svgComponent.js';
import SvgComponent1 from '../assets/svgComponent1.js';
import Navigation from '../navigation';

import { useNavigation } from '@react-navigation/native';
import TabOneScreen from './FriendsScreen';
import { useAuth } from '../services/auth';

// import * as yourModuleName from 'module-name';



export default function TabTwoScreen() {

  let [fontsLoaded] = useFonts({
    'Inter-Medium': require('../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter/Inter-SemiBold.ttf'),
  });

  const auth = useAuth();

  useEffect(() => {

  });

  async function anonymousSignin() {
    await auth.signInAnonymously()
    navigation.navigate('RandomChat');
  }

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title1}>Welcome to</Text>
        <Text style={styles.title2}>Rapid</Text>
        <SvgComponent />
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
        {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
        <View style={styles.container2}>
          <Text style={styles.title3}>
            Chat with random people and create
            everlasting friendships,
        <Text style={{ fontWeight: 'bold' }}> click below </Text>

          </Text >
        </View>

        <TouchableOpacity onPress={anonymousSignin}>
          <SvgComponent1 />
        </TouchableOpacity>

        <View style={styles.container3}>
          <Text style={styles.title4}>
            Already have an account?
        <Text onPress={() => navigation.navigate('RandomChat')} style={{ fontFamily: 'Inter-SemiBold', color: '#4B00FF' }}> Log in </Text>
            {/* <Text onPress={anonymousSignin} style={{fontFamily: 'Inter-SemiBold', color: '#4B00FF'}}> Log in as a guest</Text> */}
          </Text >
        </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { // overall container
    flex: 1,
    alignItems: 'center',
    paddingTop: '22%',

    backgroundColor: '#F5F7F9'
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
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Inter-Medium',
    color: '#414750',
    letterSpacing: 1.5
  },
  title2: { //Rapid
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
    color: '#414750',
    letterSpacing: 1.7,
    shadowColor: '#4A2EFF',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    paddingTop: '2%'
  },
  title3: { //chat with random people
    fontSize: 17,
    fontFamily: 'Inter-Regular',
    color: '#636E7E',
    lineHeight: 24

  },
  title4: { //login text part
    fontSize: 15,
    fontFamily: 'Inter-Medium',
    color: '#A9ACB0',


  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

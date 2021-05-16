import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useFonts } from 'expo-font';
import SvgComponent from '../assets/svgComponent.js';
import SvgComponent1 from '../assets/svgComponent1.js';
import OnBoardingSvgComponent2 from '../assets/onBoardingSvgComponent2.js';
import Navigation from '../navigation';

import { api } from '../services/api';
import { useNavigation } from '@react-navigation/native';
import TabOneScreen from './FriendsScreen';
import { useAuth } from '../services/auth';

// import * as yourModuleName from 'module-name';



export default function TabThreeScreen() {
  const auth = useAuth();

  async function anonymousSignin() {
    await auth.signInAnonymously();
    var user = auth.user;
    await user.updateProfile({
      displayName: randomName,
    }).then(data => console.log(data));
    navigation.navigate('RandomChat');
  }

  async function getRandomName() {
    const newRandomName = await (await api.get("/generate_display_name")).data.name;
    // const avatars = await (await api.get("avatars")).data.avatars;
    // console.log("avatars: ", avatars);
    setRandomName(newRandomName);
    console.log(newRandomName);
  }

  const navigation = useNavigation();

  const [randomName, setRandomName] = useState("Green Chinchilla");

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
      
        <Image 
        style={{
        position: 'absolute',
        top: 1260, 
        left: 25,
        width: 90,
        height: 90}}
        source={ require('../assets/images/Profile-Male-PNG.png')}
        />

        <TouchableOpacity style={styles.yesButton} onPress={() => navigation.navigate('ChooseProfileModal')}>
            <Text style={styles.loginText}>
              Change
          </Text>
          </TouchableOpacity>

        <View 
        style={{position: 'absolute',
        top: 1380, 
        left: 0,
       
        width: 400}}>

          <Text style={styles.title3}>
            We'll call you
          </Text>

          <Text style={styles.title4}>
            {randomName}
          </Text>
          </View>

          <TouchableOpacity style={styles.yesButton2} onPress={getRandomName} >
            <Text style={styles.loginText2}>
              Randomize
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.yesButton3} onPress={anonymousSignin} >
            <Text style={styles.loginText3}>
                Ready!
          </Text>
          </TouchableOpacity>
          

          <Text style={styles.title5}>
          By pressing on “Ready!”, you agree to our Terms of Service and {"\n"} acknowledge that you read our Privacy Policy
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
  title3: { //Welcome to
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Inter-SemiBold',
    color: '#6E6E6E',
    letterSpacing: 0,
    // position: 'absolute',
    // top: 1380, 
    // left: 125
  },
  title4: { //Welcome to
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Inter-ExtraBold',
    color: '#689CF6',
    letterSpacing: 0,
    marginTop: 10
    // position: 'absolute',
    // top: 1420, 
    // left: 0
  },
  yesButton: {
    backgroundColor: '#4957FF',
    borderRadius: 15,
    height: 60,
    shadowOffset: { width: 2, height: 6 },
    shadowColor: '#4957FF',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    width: 190,
    position: 'absolute',
    top: 1275, 
    left: 160
  },

  loginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Inter-ExtraBold',

  },
  yesButton2: {
    borderColor: '#4957FF',
    borderWidth: 3,
    borderRadius: 10,
    height: 35,
    shadowOffset: { width: 2, height: 6 },
    shadowColor: '#4957FF',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    width: 140,
    position: 'absolute',
    top: 1465, 
    left: 130
  },
  loginText2: {
    color: '#4957FF',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Inter-ExtraBold',
  },

  yesButton3: {
    backgroundColor: '#50E3C2',
    borderRadius: 18,
    height: 70,
    shadowOffset: { width: 2, height: 6 },
    shadowColor: '#50E3C2',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    width: 220,
    position: 'absolute',
    top: 1565, 
    left: 90

  },
  loginText3: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Inter-ExtraBold',
  },
  title5: { 
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'Inter-Medium',
    color: '#A9ACB0',
    letterSpacing: 0,
    marginTop: 10,
    position: 'absolute',
    top: 1640, 
    left: 45
  },

  
});

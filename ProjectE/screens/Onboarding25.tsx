import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useFonts } from 'expo-font';
import SvgComponent from '../assets/svgComponent.js';
import SvgComponent1 from '../assets/svgComponent1.js';
import OnBoardingSvgComponent2 from '../assets/onBoardingSvgComponent2.js';
import Navigation from '../navigation';
 import { LinearGradient } from 'expo-linear-gradient';

import { api } from '../services/api';
import { useNavigation } from '@react-navigation/native';
import TabOneScreen from './FriendsScreen';
import { useAuth } from '../services/auth';
import { createIconSetFromFontello } from '@expo/vector-icons';

// import * as yourModuleName from 'module-name';



export default function TabThreeScreen() {
  const auth = useAuth();

  // async function anonymousSignin() {
  //   await auth.signInAnonymously();
  //   var user = auth.user;
  //   await user.updateProfile({
  //     displayName: randomName,
  //     photoURL: photoURL
  //   }).then(data => {
  //     console.log(data);
  //   });
  //   navigation.navigate('RandomChat');
  // }

  // async function getRandomName() {
  //   const newRandomName = await (await api.get("/generate_display_name")).data.name;
  //   // const avatars = await (await api.get("avatars")).data.avatars;
  //   // console.log("avatars: ", avatars);
  //   setRandomName(newRandomName);
  //   console.log(newRandomName);
  //   console.log(photoURL);
  // }

  const navigation = useNavigation();

  // const [randomName, setRandomName] = useState("Green Chinchilla");
  // const [photoURL, setPhotoURL] = useState("https://rapid.nyc3.digitaloceanspaces.com/avatars/01-dog.png");
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      
      {/* <Text style={styles.title2}>Rapid</Text> */}
      {/* <SvgComponent /> */}

      <OnBoardingSvgComponent2 />
      {/* <Text style={styles.title1}>ONBOARDING 2 {"\n"}TO RAPID</Text> */}

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}


      <Text style={styles.title1}>Create</Text>
      <Text style={styles.title2}>Your Account</Text>
      
     
      <Text style={styles.title6}>Set a password</Text>

      <TextInput
        style={styles.input}
        keyboardType='default'
        onChangeText={onChangeText}
        value={text}
        autoFocus
        autoCapitalize={'none'}
          autoCorrect={false}
          secureTextEntry={true}
          accessibilityElementsHidden={true}
          contextMenuHidden={true}
      />
        

        <View 
        style={{position: 'absolute',
        top: 1380, 
        left: 0,
       
        width: 400}}>

         
          </View>

         
          <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#B3ECAE', '#00DBD0']}
      style={styles.yesButton3}
    >
          <TouchableOpacity  onPress={() => navigation.navigate('Onboarding3')}>
      
            <Text style={styles.loginText3}>
              Let's Go!
          </Text>
          
          </TouchableOpacity>
          </LinearGradient>

          


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
    marginTop:-870,
    paddingLeft: 620,
    backgroundColor: '#FFFFFF'
  },
  
  title1: { //Welcome to
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'right',
    fontFamily: 'Inter-ExtraBold',
    color: '#4B6EF6',
    letterSpacing: 1,
    position: 'absolute',
    top: 1080, 
    left: 20
  },
  title2: { //Welcome to
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'right',
    fontFamily: 'Inter-ExtraBold',
    color: '#4B6EF6',
    letterSpacing: 1,
    position: 'absolute',
    top: 1120, 
    left: 20
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
  title6: { //Welcome to
    fontSize: 23,
    textAlign: 'center',
    fontFamily: 'Inter-SemiBold',
    color: '#6E6E6E',
    letterSpacing: 0,
    marginTop: 10,
    position: 'absolute',
    top: 1200,
    left: 20
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
    borderRadius: 25,
    height: 70,
    shadowOffset: { width: 2, height: 6 },
    shadowColor: '#50E3C2',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    width: 280,
    position: 'absolute',
    top: 1335, 
    left: 50

  },
  loginText3: {
   
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Inter-ExtraBold',
    color: 'white',
    
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
  input: {
    height: 40,
    margin: 12,
    width: 320,
    borderWidth: 2,
    borderBottomColor: '#4B6EF6',
    position: 'absolute',
    top: 1240,
    left: 10,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    fontSize: 26,
    fontFamily: 'Inter-SemiBold'
  },
  
});

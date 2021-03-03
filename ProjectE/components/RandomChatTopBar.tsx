import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LoginSvgComponent from '../assets/loginSvgComponent.js';
import RandomChatTopBarSvgComponent from '../assets/randomChatTopBarSvgComponent.js';

import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
 import { Text, View, TextInput, Image } from 'react-native'

export default function RandomChatTopBar({ path }: { path: string }) {
    let [fontsLoaded] = useFonts({
        'Inter-Medium': require('../assets/fonts/Inter/Inter-Medium.ttf'),
        'Inter-Bold': require('../assets/fonts/Inter/Inter-Bold.ttf'),
        'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
        'Inter-ExtraBold': require('../assets/fonts/Inter/Inter-ExtraBold.ttf'),
      });

      if (!fontsLoaded) {
        return <View />;
    } else {
  return (
    <View style={styles.overallContainer}>
     
     
   
<View style={{ width: 320, paddingTop: 20, alignItems: 'left', flex: 1, flexDirection: 'row'}}>

    <Image style={{marginTop: 40 ,height: 60, width: 60 }} source={require('../assets/images/Profile-Male-PNG.png')}/> 
    <View style={{backgroundColor: 'white', height: 70, width: 140, marginTop: 40,marginLeft:20}}> 
    <Text style={styles.secondText}>
        You are chatting with
        </Text>
    <Text style={styles.firstText}>
          Red Poodle
        </Text>
     
    </View>
    <View style={{backgroundColor: 'white', height: 50, width:100,marginTop: 50, justifyContent: 'center',marginLeft:10}}>
    <TouchableOpacity style={styles.loginButton} >
        <RandomChatTopBarSvgComponent />
          <Text style={styles.loginText} >
            Let's be Friends
          </Text>
          
        </TouchableOpacity>

</View>
       
    </View>



    <View>
    

        

        {/* PROBABLY NEED AN IF STATEMENT (like if on certain page, display different text below) */}
       



        </View>

        {/* <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          >
          <MonoText>{path}</MonoText>
        </View> */}

        {/* <Text
          style={styles.getStartedText}
          >
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} >
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </TouchableOpacity> */}
    
    </View>
  );
}
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  overallContainer: { //overall container
    height: 150,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    shadowOffset:{ width: 0, height: 6},
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    
  },
  firstText: {
    fontSize: 20,
    fontFamily: 'Inter-ExtraBold',
    color: '#21293A',
  },
  secondText: {
    fontSize: 10,
    fontFamily: 'Inter-Medium',
    color: '#5D5D5D',
    paddingTop: 15,
    lineHeight: 23,
    textAlign: 'left'
  },
  loginButton: {
    backgroundColor: '#4B00FF',
    borderRadius: 30,
    height: 45,
    marginTop: 5,
    shadowOffset:{ width: 0, height: 2},
    shadowColor: '#4B00FF',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%' ,
    flex: 1,
    flexDirection: 'row'   
    
    
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 10,
    
    
    
  }
  
  
 
});

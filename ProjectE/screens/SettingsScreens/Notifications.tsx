import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';


import { Text, View } from '../../components/Themed';
import { Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';


import { useNavigation } from '@react-navigation/native';
import BackArrowSvgComponent from '../../assets/backArrowSvgComponent.js';
import SwitchSelector from "react-native-switch-selector";



// import * as yourModuleName from 'module-name';



export default function Notifications() {
  let [fontsLoaded] = useFonts({
    'Inter-Medium': require('../../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Bold': require('../../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../../assets/fonts/Inter/Inter-SemiBold.ttf'),
  });

  const navigation = useNavigation();
 
  if (!fontsLoaded) {
    return <View />;
  } else {
  return (
      
    <View style={styles.container}>
        {/* <View style={{width: 300, backgroundColor: 'rgba(52, 52, 52, 0.0)', }}> */}
        {/* onPress={() => navigation.navigate('TabTwoScreen')} */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('TabTwo')} >
        <BackArrowSvgComponent />
        </TouchableOpacity> */}

        {/* DEELETE FOR PRODUCTION */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('RegisterTesting')} >
        <Text> TESTING REGISTER COMPONENT</Text>
        </TouchableOpacity> */}


{/* </View> */}
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} >
        <BackArrowSvgComponent />
        </TouchableOpacity>
      <Text style={styles.title1}>Notifications</Text>

      {/* Settings text */}
      <View style={{width: '90%', height: '70%', marginTop: 80, backgroundColor: 'transparent'}}>

      <Text style={styles.settingsText}>Notifications</Text>
      <View style={{width: '50%',backgroundColor: 'transparent'}}>
      <SwitchSelector
  initial={0}
  onPress={value => console.log(`Call onPress with value: ${value}`)}
  textColor={'#21293A'} //'#7a44cf'
  selectedColor={'#FFFFFF'}
  buttonColor={'#4B00FF'}
  borderColor={'transparent'}
  height={50}
  width={50}
  textStyle={{fontSize: 12, fontFamily: 'Inter-SemiBold'}}
  selectedTextStyle={{fontSize: 12, fontFamily: 'Inter-SemiBold'}}
  hasPadding
  options={[
    { label: "On", value: "f" }, //images.feminino = require('./path_to/assets/img/feminino.png')
    { label: "Off", value: "m" } //images.masculino = require('./path_to/assets/img/masculino.png')
  ]}
/>
</View>
      </View>

      {/* Login Component  */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      {/* <View style={styles.container2}>
      <Text style={styles.title3}>
        Chat with random people and create 
        everlasting friendships, 
        <Text style={{fontWeight: 'bold'}}> click below </Text>
       
        </Text >  
      </View> */}
        
      {/* <SvgComponent1 /> */}
      

      {/* <Image style={{marginTop: 40 ,height: 138, width: 138, transform: [{ rotate: '25deg'}]}} source={require('../assets/images/peace-sign-emoji-by-google.png')}/> */}
      {/* <View style={styles.container3}>
      <Text style={styles.title4}>
        Already have an account?
        <Text onPress={() => navigation.navigate(TabOneScreen)} style={{fontFamily: 'Inter-SemiBold', color: '#4B00FF'}}> Log in </Text>
       
        </Text >  
      </View> */}


   
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: { // overall container
    flex: 1,
    alignItems: 'center',
    paddingTop: '22%',
    
    backgroundColor: '#F1F6FC'
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
  title1: { //Settings
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Inter-SemiBold',
    color: '#21293A',
    marginTop: -20
    
  },
  settingsText: { //Rapid
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#59606E',
    paddingBottom: 30
    
  },
  text1: {
    color: '#6F8BA4',
    fontSize: 14,
    paddingTop: 20
  },
  text2: {
    color: '#E53D53',
    fontSize: 14,
   
  },
  loginButton: {
    backgroundColor: '#4B00FF',
    borderRadius: 6,
    height: 45,
    marginTop: 20,
    shadowOffset:{ width: 0, height: 2},
    shadowColor: '#4B00FF',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    width: '40%'
    
    
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    
  }
});

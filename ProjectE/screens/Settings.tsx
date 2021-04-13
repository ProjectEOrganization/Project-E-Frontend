import * as React from 'react';
import { StyleSheet, Linking } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Login from '../components/Auth/Login';
import { Text, View } from '../components/Themed';
import { Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import BackArrowSvgComponent from '../assets/backArrowSvgComponent.js';
import Navigation from '../navigation';

import { useNavigation } from '@react-navigation/native';
import TabOneScreen from './TabOneScreen';
import SettingsPageSwitch from '../components/SettingsPageSwitch'
import { useAuth } from '../services/auth';




import Register from '../components/Auth/Register'

// import * as yourModuleName from 'module-name';



export default function Settings() {
  let [fontsLoaded] = useFonts({
    'Inter-Medium': require('../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter/Inter-SemiBold.ttf'),
  });

  const navigation = useNavigation();

  const auth = useAuth();

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

        <Text style={styles.title1}>Settings</Text>


        {/* <Register /> */}
        {/* Settings text */}
        <View style={{ width: '90%', height: '70%', marginTop: 80, backgroundColor: 'transparent' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <Text style={[styles.settingsText]}>Account</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate('Security')}>
            <Text style={[styles.settingsText]}>Security</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Text style={styles.settingsText}>Notifications</Text>
          </TouchableOpacity> */}

          <TouchableOpacity>
            <Text style={styles.settingsText}  onPress={() => Linking.openURL('http://rapidapp.live/report')}>Report a Problem</Text>
          </TouchableOpacity>


          <TouchableOpacity>
            <Text style={styles.settingsText} onPress={() => Linking.openURL('http://rapidapp.live/support')} >Support</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ReferralModal')}>
            <Text style={styles.settingsText} >Referrals</Text>
          </TouchableOpacity>

          {/* <Text style={styles.settingsText}>Customization</Text>
          <SettingsPageSwitch /> */}



          <TouchableOpacity>
            <Text style={[styles.settingsText, styles.text1]}  onPress={() => Linking.openURL('http://rapidapp.live/terms')}>Terms and Policy</Text>
          </TouchableOpacity>

          

          <TouchableOpacity>
            {auth.user?.uid && <Text onPress={auth.signout} style={[styles.settingsText, styles.text2]}>Log Out</Text>}
          </TouchableOpacity>

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
    fontFamily: 'Inter-Regular',
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

  }
});

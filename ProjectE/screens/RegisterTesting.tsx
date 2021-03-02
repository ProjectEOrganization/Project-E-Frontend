import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
// import FriendReulert from '../components/Alerts/TheyHadToGoAlert';
import { Text, View } from '../components/Themed';
import { Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import BackArrowSvgComponent from '../assets/backArrowSvgComponent.js';
import Navigation from '../navigation';

import { useNavigation } from '@react-navigation/native';
import TabOneScreen from './TabOneScreen';
import FriendRequestSentAlert from '../components/Alerts/FriendRequestSentAlert';
import YouAreNowFriendsAlert from '../components/Alerts/YouAreNowFriendsAlert';
import RejectedAlert from '../components/Alerts/RejectedAlert';
import SkipConfirmationAlert from '../components/Alerts/SkipConfirmationAlert';
import FriendRequestReceivedAlert from '../components/Alerts/FriendRequestReceivedAlert';

// import * as yourModuleName from 'module-name';



export default function RegisterTesting() {
  let [fontsLoaded] = useFonts({
    'Inter-Medium': require('../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter/Inter-SemiBold.ttf'),
  });

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <View />;
  } else {
  return (
      
    <View style={styles.container}>
        <View style={{width: 300, backgroundColor: 'rgba(52, 52, 52, 0.0)', }}>
        {/* onPress={() => navigation.navigate('TabTwoScreen')} */}
        <TouchableOpacity onPress={() => navigation.navigate('TabTwoScreen')} >
        <BackArrowSvgComponent />
        </TouchableOpacity>

        {/* DEELETE FOR PRODUCTION */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('TabTwoScreen')} >
        <Text> TESTING TheyHadToGo COMPONENT</Text>
        </TouchableOpacity> */}

        
</View>
        
      <Text style={styles.title1}>YouAreNowFriendsAlert</Text>
      <Text style={styles.title2}>TESTING YouAreNowFriendsAlert</Text>
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
      <View style={{backgroundColor: 'rgba(52, 52, 52, 0.0)', marginTop: 50}}>
      {/* <FriendRequestReceivedAlert /> */}
      </View>

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
    fontSize: 18,
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

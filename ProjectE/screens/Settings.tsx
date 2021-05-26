import * as React from 'react';
import { StyleSheet, Linking } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Login from '../components/Auth/Login';
import { Text, View } from '../components/Themed';
import { Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import BackArrowSvgComponent from '../assets/backArrowSvgComponent.js';
import Navigation from '../navigation';

import { useNavigation, useNavigationState } from '@react-navigation/native';
import TabOneScreen from './TabOneScreen';
import SettingsPageSwitch from '../components/SettingsPageSwitch'
import { useAuth } from '../services/auth';

import SettingsSvgComponent from '../assets/SettingsSvgComponent.js';
import SettingsIcon1 from '../assets/icons/settingsIcon1.js'
import SettingsIcon2 from '../assets/icons/settingsIcon2.js'
import SettingsIcon0 from '../assets/icons/settingsIcon0.js'
import SettingsIcon3 from '../assets/icons/settingsIcon3.js'
import SettingsIcon4 from '../assets/icons/settingsIcon4.js'
import SettingsIcon5 from '../assets/icons/settingsIcon5.js'
import SettingsIcon6 from '../assets/icons/settingsIcon6.js'
import SettingsIcon7 from '../assets/icons/settingsIcon7.js'




import Register from '../components/Auth/Register'
import { leaveQueue } from '../store/reducers/chat';
import { store } from '../store';

// import * as yourModuleName from 'module-name';



export default function Settings() {

  const navigation = useNavigation();
  const state = useNavigationState(state => state.index);

  const auth = useAuth();

  const logout = async () => {
    await store.dispatch(leaveQueue());
    setTimeout(() => {
      auth.signout()
    }, 500);
  }

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
      <View style={{ position: "absolute", marginTop: -330, left: -90, backgroundColor: '#F9FBFB' }}>
        <SettingsSvgComponent />
      </View>

      <Text style={styles.title1}>Settings</Text>




      {/* <Register /> */}
      {/* Settings text */}
      <View style={{ width: '90%', height: '70%', marginTop: 80, backgroundColor: 'transparent' }}>


        {(auth.user && !auth.user?.isAnonymous) &&
          <View style={{ height: '25%', borderRadius: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 20, borderRadius: 10 }}>
                <SettingsIcon1 />
                {(auth.user && !auth.user?.isAnonymous) &&
                  <Text style={[styles.settingsText]}>Account</Text>
                }
                <SettingsIcon0 />

              </View>
            </TouchableOpacity>




            <View style={styles.separator} lightColor="#6F8BA4" opacity={0.14} />
            <TouchableOpacity onPress={() => navigation.navigate('Security')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 20, borderRadius: 10 }}>
                <SettingsIcon2 />
                {(auth.user && !auth.user?.isAnonymous) &&

                  <Text style={[styles.settingsText]}>Security</Text>

                }
                <SettingsIcon0 />
              </View>
            </TouchableOpacity>
          </View>
        }

        {/* <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Text style={styles.settingsText}>Notifications</Text>
          </TouchableOpacity> */}
        <View style={{ height: '40%', borderRadius: 20, marginTop: 40 }}>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 20, borderRadius: 10 }}>
              <SettingsIcon3 />
              <Text style={styles.settingsText} onPress={() => Linking.openURL('http://rapidapp.live/support')}>Support</Text>

            </View>
          </TouchableOpacity>

          <View style={styles.separator} lightColor="#6F8BA4" opacity={0.14} />


          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 20, borderRadius: 10 }}>
              <SettingsIcon4 />
              <Text style={styles.settingsText} onPress={() => Linking.openURL('http://rapidapp.live/terms')} >Terms and Policy</Text>
              <SettingsIcon0 />
            </View>
          </TouchableOpacity>

          <View style={styles.separator} lightColor="#6F8BA4" opacity={0.14} />



          <TouchableOpacity onPress={() => navigation.navigate('ReferralModal')}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 20, borderRadius: 10 }}>
              <SettingsIcon5 />
              <Text style={styles.settingsText} >Referrals</Text>
              <SettingsIcon0 />
            </View>
          </TouchableOpacity>

        </View>

        {(auth.user && !auth.user?.isAnonymous) &&
          <View style={{ height: '13%', borderRadius: 20, marginTop: 40 }}>
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 20, borderRadius: 10 }}>
                <SettingsIcon6 />
                {(auth.user && !auth.user?.isAnonymous) && <Text onPress={logout} style={[styles.settingsText, styles.text2]}>Log Out</Text>}
              </View>
            </TouchableOpacity>
          </View>
        }


        {(auth.user?.isAnonymous) &&
          <View style={{ height: '13%', borderRadius: 20, marginTop: 40 }}>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterModal')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 20, borderRadius: 10 }}>
                <SettingsIcon7 />
                <Text style={[styles.settingsText, styles.text2]}>Create Account</Text>
              </View>
            </TouchableOpacity>
          </View>
        }



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

const styles = StyleSheet.create({
  container: { // overall container
    flex: 1,
    alignItems: 'center',
    paddingTop: '22%',

    backgroundColor: '#F9FBFB'
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
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
    marginTop: -20

  },
  settingsText: { //Rapid
    fontSize: 18,
    fontFamily: 'Inter-Medium',
    color: '#6F8BA4',
    paddingRight: 110

  },
  text1: {
    color: '#6F8BA4',
    fontSize: 14,
    paddingTop: 20
  },
  text2: {
    color: '#04A242',
    fontFamily: 'Inter-SemiBold'

  },
  separator: {
    marginVertical: 0,
    height: 1,
    width: '70%',
    marginLeft: 90,
  },
});

import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LoginSvgComponent from '../../assets/loginSvgComponent.js';
import RandomChatTopBarSvgComponent from '../../assets/randomChatTopBarSvgComponent.js';

import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FriendsMessagesCard() {
  let [fontsLoaded] = useFonts({
    'Inter-Medium': require('../../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Bold': require('../../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-ExtraBold': require('../../assets/fonts/Inter/Inter-ExtraBold.ttf'),
  });

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('FriendsChatScreen')}>
        
            <View style={styles.topBar}>
                <View>
                    <Image
                    style={{ height: 65, width: 65 }}
                    source={require('../../assets/images/Profile-Male-PNG.png')}
                    />
                </View>
                
                <View style={styles.userNameText}>
                    <Text style={styles.firstText}>  Nick</Text>
                    <Text style={styles.secondText}>  Remember that time i gave..</Text>
                </View>

                <View style={{backgroundColor: '#FF0B2B', width: 20, height: 20, borderRadius: 10, marginLeft: 50, marginTop: -25, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'white'}}>
                        5
                    </Text>

                </View>


            </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 6 },
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    width: '105%',
    
    
  },
  userNameText: {
    marginLeft: 15,
    marginTop: 0,
    textAlign:'center'
  },
  firstText: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#21293A',
    textAlign: 'left',
    marginLeft: -5
  },
  secondText: {
    fontSize: 10,
    paddingTop: 10,
    marginTop: 5,
    fontFamily: 'Inter-SemiBold',
    color: '#919191',
  },
  loginButton: {
    backgroundColor: '#4B00FF',
    marginTop: 10,
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#4B00FF',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: -10,
  },
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 10,
  },
});

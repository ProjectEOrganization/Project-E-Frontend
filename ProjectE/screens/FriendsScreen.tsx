import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FriendsChat from '../components/FriendsChat';

import { Text, View } from '../components/Themed';
import BackArrowSvgComponent from '../assets/backArrowSvgComponent.js'
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import FriendsPageSwitch from '../components/FriendsPageSwitch'
import ThreeDotsSvg from '../assets/threeDotsSvg.js'


export default function FriendsScreen() {
  let username = "David"

  let [fontsLoaded] = useFonts({
    'Inter-Medium': require('../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter/Inter-SemiBold.ttf'),
  });

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <View />;
  }else{
  return (
    <View style={styles.container}>

      <View style={{marginTop: 80, backgroundColor: 'transparent',width: '75%'}}>
      <ThreeDotsSvg />
      </View>

      <View style={{width: '75%', marginTop: 60, backgroundColor: 'transparent'}}>
      <Text style={{fontFamily: 'Inter-SemiBold', fontSize: 25, color: '#21293A'}}>
      Hello {username}!
      </Text>
      <FriendsPageSwitch />
      </View>

      <View style={{marginTop: 50, width: '75%'}}>
      <FriendsChat />
      </View>




      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <TouchableOpacity onPress={() => navigation.navigate('FriendsChatScreen')}>
      <Text>FriendsChatScreenTest</Text>
      </TouchableOpacity>
    </View>

  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F1F6FC',
    height: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
 import { Text, View, TextInput, Image } from 'react-native'

export default function FriendsPageSwitch({ path }: { path: string }) {
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
     
     <SwitchSelector
  initial={0}
  onPress={value => console.log(`Call onPress with value: ${value}`)}
  textColor={'#21293A'} //'#7a44cf'
  selectedColor={'#FFFFFF'}
  buttonColor={'#4B00FF'}
  borderColor={'rgba(12,12,12,0.0)'}
  height={50}
  textStyle={{fontSize: 12, fontFamily: 'Inter-SemiBold'}}
  selectedTextStyle={{fontSize: 12, fontFamily: 'Inter-SemiBold'}}
  hasPadding
  options={[
    { label: "Messages", value: "f" }, //images.feminino = require('./path_to/assets/img/feminino.png')
    { label: "Friends", value: "m" } //images.masculino = require('./path_to/assets/img/masculino.png')
  ]}
/>
  
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
    height: 40,
    width: 200,
    backgroundColor: 'rgba(0,0,255,0.0)',
    borderRadius: 30,
    alignItems: 'center',
    shadowOffset:{ width: 0, height: 6},
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    marginTop: 100
    
  },
  
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 10,
 }
 
});
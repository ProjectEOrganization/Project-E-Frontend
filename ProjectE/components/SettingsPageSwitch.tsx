import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View, TextInput, Image } from 'react-native'

export default function SettingsPageSwitch({ path }: { path: string }) {

  return (
    <View style={styles.overallContainer}>

      <SwitchSelector
        initial={0}
        onPress={value => console.log(`Call onPress with value: ${value}`)}
        textColor={'#250D4F'} //'#7a44cf'
        selectedColor={'#FFFFFF'}
        buttonColor={'#250D4F'}
        borderColor={'transparent'}
        height={50}
        textStyle={{ fontSize: 12, fontFamily: 'Inter-SemiBold' }}
        selectedTextStyle={{ fontSize: 12, fontFamily: 'Inter-SemiBold' }}
        hasPadding
        options={[
          { label: "Light", value: "f" }, //images.feminino = require('./path_to/assets/img/feminino.png')
          { label: "Dark", value: "m" } //images.masculino = require('./path_to/assets/img/masculino.png')
        ]}
      />

    </View>
  );
}



const styles = StyleSheet.create({
  overallContainer: { //overall container
    height: 40,
    width: 200,
    backgroundColor: 'transparent',
    borderRadius: 30,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 6 },
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    marginBottom: 50

  },

  loginText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 10,
  }

});

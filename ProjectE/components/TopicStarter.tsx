import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LoginSvgComponent from '../assets/loginSvgComponent.js';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View, TextInput } from 'react-native';

export default function TopicStarter({ path }: { path: string }) {

  const colors = [
    ['#928CC4', '#22CCC3'],
    ['#ffafbd', '#ffc3a0'],
    ['#cc2b5e', '#753a88'],
    ['#42275a', '#734b6d'],
    ['#eb3349', '#f45c43'],
    ['#614385', '#516395'],
    ['#000428', '#004e92'],
    ['#4568dc', '#b06ab3'],
    ['#ffd89b', '#19547b'],
  ];

  const random = Math.floor(Math.random() * colors.length);

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1.5, y: 0 }}
      colors={colors[random]}
      style={styles.overallContainer}
    >
      <Text style={styles.firstText}>Talk about why unicorns are dope</Text>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  overallContainer: {
    marginTop: 80,
    marginBottom: 25,
    marginHorizontal: 20,
    height: 30,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstText: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  secondText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#A9ACB0',
    textAlign: 'center',
  },
  yesButton: {
    backgroundColor: '#3CDF7C',
    borderRadius: 6,
    height: 75,
    marginTop: 35,
    shadowOffset: { width: 2, height: 6 },
    shadowColor: '#3CDF7C',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    width: 110,
    marginRight: 30,
  },
  noButton: {
    backgroundColor: '#F24646',
    borderRadius: 6,
    height: 75,
    marginTop: 35,
    shadowOffset: { width: 2, height: 6 },
    shadowColor: '#F24646',
    shadowOpacity: 0.27,
    justifyContent: 'center',
    width: 110,
  },
  loginText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Inter-Bold',
  },
});

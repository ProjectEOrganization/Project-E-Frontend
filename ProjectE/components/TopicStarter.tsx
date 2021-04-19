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

export default function TopicStarter({ topic, colors }: { topic: { text: string }, colors: Array<string> }) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1.5, y: 0 }}
      colors={colors}
      style={styles.overallContainer}
    >
      <Text style={styles.firstText}>{topic.text}</Text>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  overallContainer: {
    marginHorizontal: 20,
    minHeight: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
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

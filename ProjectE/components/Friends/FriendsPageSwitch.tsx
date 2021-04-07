import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View, TextInput, Image } from 'react-native';

export default function FriendsPageSwitch({ onChange }: { onChange: () => void }) {
  return (
    <View style={styles.overallContainer}>
      <SwitchSelector
        initial={0}
        onPress={(value: string) => onChange(value)}
        textColor={'#21293A'} //'#7a44cf'
        selectedColor={'#FFFFFF'}
        buttonColor={'#4B00FF'}
        borderColor={'transparent'}
        height={50}
        textStyle={{ fontSize: 12, fontFamily: 'Inter-SemiBold' }}
        selectedTextStyle={{ fontSize: 12, fontFamily: 'Inter-SemiBold' }}
        hasPadding
        options={[
          { label: 'Messages', value: 'messages' },
          { label: 'Friends', value: 'friends' },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overallContainer: {
    width: 250,
    backgroundColor: 'transparent',
    borderRadius: 30,
    shadowOffset: { width: 0, height: 6 },
    shadowColor: '#21293A',
    shadowOpacity: 0.05,
    marginTop: 45,
  },
});

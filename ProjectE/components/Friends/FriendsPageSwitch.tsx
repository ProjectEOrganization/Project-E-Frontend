import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View, TextInput, Image } from 'react-native';

export default function FriendsPageSwitch({ path }: { path: string }) {
  let [fontsLoaded] = useFonts({
    'Inter-Medium': require('../../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Bold': require('../../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-ExtraBold': require('../../assets/fonts/Inter/Inter-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <View style={styles.overallContainer}>
        <SwitchSelector
          initial={0}
          onPress={(value) => console.log(`Call onPress with value: ${value}`)}
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

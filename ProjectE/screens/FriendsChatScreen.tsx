import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import FriendsChat from '../components/Friends/FriendsChat';

import { Text, View } from '../components/Themed';
import BackArrowSvgComponent from '../assets/backArrowSvgComponent.js';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import FriendsPageSwitch from '../components/Friends/FriendsPageSwitch';
import ThreeDotsSvg from '../assets/threeDotsSvg.js';
import FriendsChatBox from '../components/Friends/FriendsChatBox';
import FriendsChatScreenBottomBar from '../components/Friends/FriendsChatScreenBottomBar';

export default function FriendsChatScreen() {
  let username = 'David';

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
        <View
          style={{
            marginTop: 80,
            backgroundColor: 'transparent',
            width: '80%',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
            <BackArrowSvgComponent />
          </TouchableOpacity>

          <Image
            style={{ height: 50, width: 50, marginLeft: -250, marginTop: -17 }}
            source={require('../assets/images/Profile-Male-PNG.png')}
          />
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Inter-SemiBold',
              color: '#21293A',
              marginLeft: 15,
              marginTop: -5,
            }}
          >
            Nick
          </Text>
          <View
            style={{
              transform: [{ rotate: '90deg' }],
              marginLeft: 120,
              marginTop: -20,
              backgroundColor: 'transparent',
            }}
          >
            <ThreeDotsSvg />
          </View>
        </View>

        <View
          style={{
            width: '75%',
            marginTop: 60,
            backgroundColor: 'transparent',
          }}
        ></View>

        <View
          style={{ width: '100%', backgroundColor: '#F1F6FC', height: '100%' }}
        >
          <FriendsChatBox />
        </View>
        <FriendsChatScreenBottomBar />
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
});

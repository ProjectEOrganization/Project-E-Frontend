import * as React from 'react';
import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import FriendsChat from '../components/Friends/FriendsChat';

import { Text, View } from '../components/Themed';
import BackArrowSvgComponent from '../assets/backArrowSvgComponent.js';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import FriendsPageSwitch from '../components/Friends/FriendsPageSwitch';
import ThreeDotsSvg from '../assets/threeDotsSvg.js';
import { useAuth } from '../services/auth';
import { api } from '../services/api';
import { useSocket } from '../services/socket';

export default function FriendsScreen() {
  let username = 'David';

  let [fontsLoaded] = useFonts({
    'Inter-Medium': require('../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter/Inter-SemiBold.ttf'),
  });

  const navigation = useNavigation();

  const auth = useAuth();
  const socket = useSocket();
  // Example of using firebase auth and API.
  React.useEffect(() => {
    (async () => {
      // await auth.signin('email', 'password')
      // await auth.signInAnonymously();
      // console.log(auth.user.uid);

      // const res = await api.get('/hi');
      // console.log(res.data);
    })();
  }, []);

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <View style={styles.container}>
        <View
          style={{
            marginTop: 80,
            backgroundColor: 'transparent',
          }}
        >
          <ThreeDotsSvg />
        </View>

        <View
          style={{
            marginTop: 60,
            backgroundColor: 'transparent',
          }}
        >
          <Text
            style={{
              fontFamily: 'Inter-SemiBold',
              fontSize: 25,
              color: '#21293A',
            }}
          >
            Hello {username}!
          </Text>
          <FriendsPageSwitch />
        </View>

        <View style={{ backgroundColor: 'transparent', marginTop: 50 }}>
          <FriendsChat />
        </View>

        <View
          style={styles.separator}
          lightColor='#eee'
          darkColor='rgba(255,255,255,0.1)'
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('FriendsChatScreen')}
        >
          <Text>FriendsChatScreenTest</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 35,
    flex: 1,
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
  },
});

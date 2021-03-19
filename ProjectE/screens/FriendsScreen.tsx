import * as React from 'react';
import { Button, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
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
import FriendsMessagesCard from '../components/Friends/FriendsMessagesCard';
import IndividualFriendChat from '../components/Friends/IndividualFriendChat';
import FriendsChatList from '../components/Friends/FriendsChatList';

const { width } = Dimensions.get('screen');

export default function FriendsScreen() {
  let username = 'Anonymous';

  let [fontsLoaded] = useFonts({
    'Inter-Medium': require('../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter/Inter-SemiBold.ttf'),
  });

  const navigation = useNavigation();

  const scrollRef = React.useRef<ScrollView | null>(null);

  const auth = useAuth();
  const socket = useSocket();

  const [route, setRoute] = React.useState<"messages" | "friends">("messages")

  React.useEffect(() => {
    if (route === 'messages') scrollRef.current?.scrollTo({ x: 0, animated: true })
    else if (route === 'friends') scrollRef.current?.scrollTo({ x: width, animated: true })
  }, [route])

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              marginTop: 80,
              backgroundColor: 'transparent',
            }}
          >
            <ThreeDotsSvg />
          </View>

          {auth.user?.uid ?
            <Button title="Log out" onPress={auth.signout} />
            : (
              <>
                <Button title="Sign in" onPress={() => navigation.navigate('LoginModal')} />
                <Button title="Sign up" onPress={() => navigation.navigate('RegisterModal')} />
              </>
            )}

          <View
            style={{
              marginTop: 60,
              backgroundColor: 'transparent',
              paddingHorizontal: 35,
            }}
          >
            <Text
              style={{
                fontFamily: 'Inter-SemiBold',
                fontSize: 25,
                color: '#21293A',
              }}
            >
              Hello {auth.user?.displayName || username}!
          </Text>
            <FriendsPageSwitch onChange={(route) => setRoute(route)} />
          </View>

          <ScrollView ref={scrollRef} scrollEnabled={false} horizontal pagingEnabled contentContainerStyle={{ flexDirection: 'row', width: width * 2, marginTop: 35, }}>
            <View style={{ backgroundColor: 'transparent', width, paddingLeft: (width * 0.15) / 2 }}>
              <FriendsChatList />
            </View>
            <View style={{ backgroundColor: 'transparent', width, paddingHorizontal: 35 }}>
              <FriendsChat />
            </View>
          </ScrollView>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F6FC',
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

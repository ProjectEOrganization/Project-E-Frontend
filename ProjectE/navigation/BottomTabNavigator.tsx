import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useAuth } from '../services/auth';
import { useNavigation, useNavigationState, useRoute } from '@react-navigation/native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/FriendsScreen';
import RandomChatScreen from '../screens/RandomChatScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import SvgComponentNav from '../assets/svgComponentNav.js';
import HomeButtonTipSvg from '../assets/HomeButtonTipSvg.js'
import NavbarRCHAT from '../assets/navbarRCHAT.svg'
import { View } from '../components/Themed';
import NextPart from '../screens/NextPart';
import Settings from '../screens/Settings';
import FriendsScreen from '../screens/FriendsScreen';
import LoginModal from '../components/Modals/LoginModal';
import Account from '../screens/SettingsScreens/Account';
import Notifications from '../screens/SettingsScreens/Notifications';
import Security from '../screens/SettingsScreens/Security'
import FriendsChatScreen from '../screens/FriendsChatScreen';
import onBoarding1 from '../screens/Onboarding1';
import { store } from '../store';
import { fetchChats, joinQueue } from '../store/reducers/chat';
import { useSelector } from '../hooks';
import { Pressable, Text, TouchableOpacity, Image } from 'react-native';
import { Tooltip } from 'react-native-elements';
import { navigationRef } from '.';
import { useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LottieView from 'lottie-react-native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  const navigation = useNavigation();
  const route = useRoute();
  const state = useNavigationState(state => state.index);
  const auth = useAuth();
  const skipRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const newSkipRef = await AsyncStorage.getItem('newSkipRef');
      if (newSkipRef == "true") {
        console.log("skipRef true");
        // await AsyncStorage.clear()
        //   .catch(error => console.log(error));
      } else {
        console.log("skipRef false");
        skipRef.current?.toggleTooltip();
        await AsyncStorage.setItem('newSkipRef', 'true')
          .catch(error => console.log(error));
      }
    }
    fetchData();
  }, [])

  // useEffect(() => {
  //   skipRef.current?.toggleTooltip();
  // }, []);

  function FontAwesome(props: {
    name: React.ComponentProps<typeof FontAwesome5>['name'];
    color: string;
  }) {
    return (
      <TouchableOpacity onPress={checkAuth}>
        <FontAwesome5 size={25} style={{ marginTop: 25, marginLeft: 5 }} {...props} />
        <Text style={{ marginTop: 5, color: props.color, fontSize: 12, fontFamily: 'Inter-SemiBold' }}>Friends</Text>
      </TouchableOpacity>
    );
  }

  function checkAuth() {
    if (!auth.user || auth.user.isAnonymous) {
      navigation.navigate('RegisterModal');
      console.log('not logged in');
    } else {
      navigationRef.current?.navigate('Friends')
      store.dispatch(fetchChats({ loading: false }))
    }
    console.log(state, "Friends");
  }

  const Icon = (props: {
    name: React.ComponentProps<typeof Ionicons>['name'];
    color: string;
  }) => {
    const queue = useSelector(state => state.chat.queue);
    const state = useNavigationState(state => state.index)

    const onPress = () => {
      if (state !== 1 && queue.status === 'idle') {
        store.dispatch(joinQueue())
        navigation.navigate('RandomChat')
      }
      else if (state !== 1) {
        navigation.navigate('RandomChat')
      }
      else if (queue.status === 'found') {
        navigationRef.current?.navigate('SkipConfirmationModal')
      }
      else {
        store.dispatch(joinQueue())
      }
      console.log(state, "RandomChat");
    }

    const animation = useRef<LottieView | null>();

    useEffect(() => {
      if (queue.status === 'searching') {
        animation.current?.play()
      }
      else animation.current?.reset()
    }, [queue?.status])



    return (

      <>
       
        <Image source={require("../assets/dog2.png")} 
       style={{height: 28, width: 28, tintColor: props.color, marginTop: 24 }} />
        <Text style={{ marginTop: 5, color: props.color, fontSize: 12, fontFamily: 'Inter-SemiBold' }}>rChat</Text>
      </>
      // <>
      //   <TouchableOpacity onPress={onPress} style={{ marginBottom: -20, backgroundColor: 'transparent', }}>
      //     {/* <Tooltip ref={skipRef} onPress={onPress} popover={<Text>Skip this person</Text>}> */}
      //     {/* <SvgComponentNav /> */}

      //     <LottieView
      //       ref={animation}
      //       style={{
      //         width: 100,
      //         height: 100,
      //         marginBottom: 30
      //       }}
      //       source={require('../assets/animations/button.json')}
      //     />
      //     {/* </Tooltip> */}
      //   </TouchableOpacity>
      // </>


    );
  }

  function TabBarIcon(props: {
    name: React.ComponentProps<typeof Ionicons>['name'];
    color: string;
  }) {

    return (
      <>
        <Ionicons size={25} style={{ marginTop: 25 }} {...props} />
        <Text style={{ marginTop: 5, color: props.color, fontSize: 12, fontFamily: 'Inter-SemiBold' }}>Settings</Text>
      </>
    );
  }

  return (
    <BottomTab.Navigator
      initialRouteName={auth.loggedIn ? "Friends" : "RandomChat"}
      tabBarOptions={{
        activeTintColor: '#4B6EF6',
        style: { height: 90, borderColor: 'transparent', borderTopLeftRadius: 30, borderTopRightRadius: 30, shadowOffset: { width: 0, height: 1}, shadowColor: '#000000', shadowOpacity: 0.3},
        inactiveTintColor: '#92A0BC',
        showLabel: false
      }}
    >
      <BottomTab.Screen
        name='Friends'
        component={FriendsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name='user-friends' color={color} />
          ),
          tabBarButton: props => {
            return (
              <Pressable {...props} onPress={checkAuth} />
            )
          }
        }}
      />

      <BottomTab.Screen
        name='RandomChat'
        component={RandomChatScreen}
        options={{
          tabBarIcon: Icon,
        }}
      />

      <BottomTab.Screen
        name='Settings'
        component={SettingsStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='settings-sharp' color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name='Settings'
        component={Settings}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        name='Account'
        component={Account}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        name='Notifications'
        component={Notifications}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        name='Security'
        component={Security}
        options={{ headerShown: false }}
      />
    </SettingsStack.Navigator>
  );
}

const FriendsStack = createStackNavigator();

export default function FriendsStackScreen() {
  return (
    <FriendsStack.Navigator>
      <FriendsStack.Screen
        name='Friends'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <FriendsStack.Screen
        name='FriendsChatScreen'
        component={FriendsChatScreen}
        options={{ headerShown: false }}
      />
    </FriendsStack.Navigator>
  );
}


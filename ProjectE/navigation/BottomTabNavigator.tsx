import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useAuth } from '../services/auth';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/FriendsScreen';
import RandomChatScreen from '../screens/RandomChatScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import SvgComponentNav from '../assets/svgComponentNav.js';
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
import { TouchableOpacity } from 'react-native-gesture-handler';
import { store } from '../store';
import { joinQueue } from '../store/reducers/chat';
import { useSelector } from '../hooks';
import { Pressable, Text } from 'react-native';
import { navigationRef } from '.';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();


function BottomTabNavigator() {
  const navigation = useNavigation();
  const auth = useAuth();
  function FontAwesome(props: {
    name: React.ComponentProps<typeof FontAwesome5>['name'];
    color: string;
  }) {
    return (
    <>
      <FontAwesome5 onPress={checkAuth} size={25} style={{marginTop: 25}} {...props} />
      <Text style={{marginTop:5, color: props.color, fontSize:10}}>Friends</Text>
    </>
    );
  }
  
  function checkAuth() {
    if (!auth.user) {
      navigation.navigate('LoginModal');
    } else {
      // navigation.navigate('Friends');
      navigationRef.current?.navigate('Friends')
      console.log('logged in')
    }
  }
  return (
    <BottomTab.Navigator
      initialRouteName='Friends'
      tabBarOptions={{
        activeTintColor: '#00DBD0',
        style: { height: 90 },
        inactiveTintColor: '#5C626E',
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
        }}
      />

      <BottomTab.Screen
        name='RandomChat'
        component={RandomChatScreen}
        options={{
          tabBarIcon: Icon,
          tabBarLabel: ''
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

      {/* <BottomTab.Screen
        name="RegisterTesting"
        component={RegisterTestingNavigator}
        options={{
          
          tabBarVisible: false,
        }}
      />  */}

    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function Icon() {
  const queue = useSelector(state => state.chat.queue);
  const onPress = () => {
    if (queue.status === 'found') {
      navigationRef.current?.navigate('SkipConfirmationModal')
    }
    else {
      store.dispatch(joinQueue())
    }
  }

  return (
    <TouchableOpacity onPress={onPress} style={{ marginBottom: -20, backgroundColor: 'transparent' }}>
      <SvgComponentNav />
    </TouchableOpacity>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return(
    <>
    <Ionicons size={25} style={{ marginTop: 25 }} {...props} />
    <Text style={{marginTop:5, color: props.color, fontSize:10}}>Friends</Text>
    </>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

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
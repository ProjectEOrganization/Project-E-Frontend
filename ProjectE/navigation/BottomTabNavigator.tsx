import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/FriendsScreen';
import RandomChatScreen from '../screens/RandomChatScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import SvgComponentNav from '../assets/svgComponentNav.js';
import { View } from '../components/Themed';
import NextPart from '../screens/NextPart';
import Settings from '../screens/Settings'
import FriendsScreen from '../screens/FriendsScreen'
import Account from '../screens/SettingsScreens/Account'
import Notifications from '../screens/SettingsScreens/Notifications'
import FriendsChatScreen from '../screens/FriendsChatScreen'


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Friends"
      tabBarOptions={{ activeTintColor: '#00DBD0', style:{height:90}, inactiveTintColor: '#5C626E' }}>
      <BottomTab.Screen
        name="Friends"
        component={FriendsStackScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="user-friends" color={color} />,
          
          
        }}
      />
      <BottomTab.Screen
        name=" "
        component={RandomChatScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon />,
        
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="settings-sharp" color={color} />,
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
  return <View style={{marginBottom: -25, backgroundColor: 'transparent'}}><SvgComponentNav /></View>
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={25} style={{ marginBottom: -20 }} {...props} />;
}

function FontAwesome(props: { name: React.ComponentProps<typeof FontAwesome5>['name']; color: string }) {
  return <FontAwesome5 size={25} style={{ marginBottom: -20 }} {...props} />;
}


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
      <SettingsStack.Screen name="Account" component={Account} options={{ headerShown: false }}/>
      <SettingsStack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }}/>
    </SettingsStack.Navigator>
  );
}

const FriendsStack = createStackNavigator();

function FriendsStackScreen() {
  return (
    <FriendsStack.Navigator>
      <FriendsStack.Screen name="Friends" component={FriendsScreen} options={{ headerShown: false }}/>
      <FriendsStack.Screen name="FriendsChatScreen" component={FriendsChatScreen} options={{ headerShown: false, tabBarVisible: false}}/>
    </FriendsStack.Navigator>
  );
}


//Should delete this after probably.

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}

      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      
      <TabTwoStack.Screen
      
        name="RandomChatScreen"
        component={RandomChatScreen}
        // options={{ headerTitle: 'Tab Two Title' }}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}




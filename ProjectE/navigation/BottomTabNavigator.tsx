import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import SvgComponentNav from '../assets/svgComponentNav.js';
import { View } from '../components/Themed';
import NextPart from '../screens/NextPart';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Friends"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, style:{height:100} }}>
      <BottomTab.Screen
        name="Friends"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="user-friends" color={color} />,
        }}
      />
      <BottomTab.Screen
        name=" "
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Icon />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={NextPart}
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
  return <View style={{marginBottom: -35, backgroundColor: 'rgba(52, 52, 52, 0.0)', height: 111}}><SvgComponentNav /></View>
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -20 }} {...props} />;
}

function FontAwesome(props: { name: React.ComponentProps<typeof FontAwesome5>['name']; color: string }) {
  return <FontAwesome5 size={30} style={{ marginBottom: -20 }} {...props} />;
}


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
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
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

import { NavigationContainer, DefaultTheme, DarkTheme, NavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import FriendRequestReceivedModal from '../components/Modals/FriendRequestReceivedModal';
import LoginModal from '../components/Modals/LoginModal';
import RegisterModal from '../components/Modals/RegisterModal';
import RejectedModal from '../components/Modals/RejectedModal';
import SkipConfirmationModal from '../components/Modals/SkipConfirmationModal';
import TheyHadToGoModal from '../components/Modals/TheyHadToGoModal';
import YouAreNowFriendsModal from '../components/Modals/YouAreNowFriendsModal';
import FriendRequestSentModal from '../components/Modals/FriendRequestSentModal';
import SendFriendRequestModal from '../components/Modals/SendFriendRequestModal'

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import { popupEffect } from './effects/popupEffect';
import LinkingConfiguration from './LinkingConfiguration';
import SendFriendRequestAlertId from '../components/Alerts/SendFriendRequestAlert';

export const navigationRef = React.createRef<NavigationContainerRef>();

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
const Navigation = (props: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      ref={navigationRef}
      linking={LinkingConfiguration}
      theme={props.colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Root" screenOptions={{ headerShown: false, cardOverlayEnabled: true }}>
        <Stack.Screen
          name='LoginModal'
          component={LoginModal}
          options={{ ...popupEffect }}
        />
        <Stack.Screen
          name='RegisterModal'
          component={RegisterModal}
          options={{ ...popupEffect }}
        />
        <Stack.Screen
          name='FriendRequestReceivedModal'
          component={FriendRequestReceivedModal}
          options={{ ...popupEffect }}
        />
        <Stack.Screen
          name='RejectedModal'
          component={RejectedModal}
          options={{ ...popupEffect }}
        />
        <Stack.Screen
          name='YouAreNowFriendsModal'
          component={YouAreNowFriendsModal}
          options={{ ...popupEffect }}
        />
        <Stack.Screen
          name='FriendRequestSentModal'
          component={FriendRequestSentModal}
          options={{ ...popupEffect }}
        />
        <Stack.Screen
          name='TheyHadToGoModal'
          component={TheyHadToGoModal}
          options={{ ...popupEffect }}
        />
        <Stack.Screen
          name='SkipConfirmationModal'
          component={SkipConfirmationModal}
          options={{ ...popupEffect }}
        />
        <Stack.Screen
          name='SendFriendRequestModal'
          component={SendFriendRequestModal}
          options={{ ...popupEffect }}
        />
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();
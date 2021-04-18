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
import ReferralModal from '../components/Modals/ReferralModal'
import ChillzoneModal from '../components/Modals/ChillzoneModal'
import Onboarding1 from '../screens/Onboarding1'

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import { popupEffect } from './effects/popupEffect';
import LinkingConfiguration from './LinkingConfiguration';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import { useAuth } from '../services/auth';
import * as Notifications from 'expo-notifications';
import { api } from '../services/api';
import { setNotificationHandler } from 'expo-notifications';
import { store } from '../store';
import { loadChat } from '../store/reducers/chat';

export const navigationRef = React.createRef<NavigationContainerRef>();

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
const Navigation = (props: { colorScheme: ColorSchemeName }) => {

  const auth = useAuth();

  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      const newUser = await AsyncStorage.getItem('newUser');
      if (newUser == "true") {
        console.log("true!!");
        // await AsyncStorage.clear()
        //   .catch(error => console.log(error));
      } else {
        console.log("false!!");
        navigationRef.current?.navigate('Onboarding');
        await AsyncStorage.setItem('newUser', 'true')
          .catch(error => console.log(error));
      }
    }
    setTimeout(() => {
      fetchData();
    }, 10)
  }, [])

  const registerPush = async () => {
    if (auth.user?.uid) {
      await Notifications.requestPermissionsAsync()
      const expoPushToken = await Notifications.getExpoPushTokenAsync();

      if (expoPushToken?.data) {
        api.post('/push', { token: expoPushToken.data })
      }
    }
  }

  React.useEffect(() => {
    if (ready === false) return
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      setNotificationHandler({
        handleNotification: async () => ({
          shouldPlaySound: false,
          shouldSetBadge: true,
          shouldShowAlert: true,
        })
      })
    });

    const subscription2 = Notifications.addNotificationResponseReceivedListener(async (response) => {
      if (response.notification.request.content.data.type === 'dm') {
        const chat = await store.dispatch(loadChat(response.notification.request.content.data.uid));
        navigationRef.current.navigate('FriendsChatScreen', chat.payload)
      }
    });

    registerPush();
    return () => {
      subscription.remove();
      subscription2.remove();
    }
  }, [auth, ready])


  return (
    <NavigationContainer
      ref={navigationRef}
      linking={LinkingConfiguration}
      onReady={() => setReady(true)}
      theme={props.colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Root" screenOptions={{ headerShown: false, cardOverlayEnabled: true }}>
        <Stack.Screen
          name='LoginModal'
          component={LoginModal}
          options={{ ...popupEffect }}
        />
        <Stack.Screen
          name='ReferralModal'
          component={ReferralModal}
          options={{ ...popupEffect }}
        />
        <Stack.Screen
          name='ChillzoneModal'
          component={ChillzoneModal}
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
        <Stack.Screen name="Onboarding" component={Onboarding1} />
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
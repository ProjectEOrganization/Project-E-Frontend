import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import TabTwoScreen from './screens/Onboarding1';
import { ProvideAuth, useAuth } from './services/auth';
import { ProvideSocket, useSocket } from './services/socket';
import { store } from './store';
import { useNavigation } from '@react-navigation/core';
import navigationRef from './navigation/index';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  async function setNewUser() {
    console.log("setting new user")
    await AsyncStorage.setItem('newUser', 'true');
  }

  async function getNewUser() {
    const value = await AsyncStorage.getItem('newUser');
    // console.log("newUser value:");
    // console.log(value);
    return(value);
  }

  // useEffect(() =>{
  //   async function fetchData() {
  //     const newUser = await AsyncStorage.getItem('newUser');
  //     if (newUser == "true") {
  //       navigationRef.current.navigate('LoginModal');
  //       console.log("true!!");
  //     } else {
  //       navigationRef.current?.navigate('SkipConfirmationModal');
  //       console.log("false!!")
  //     }
  //   }
  //   fetchData();
  // });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <ProvideAuth>
          <ProvideSocket>
            <SafeAreaProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar barStyle="dark-content" />
            </SafeAreaProvider>
          </ProvideSocket>
        </ProvideAuth>
      </Provider>
    );
  }
}

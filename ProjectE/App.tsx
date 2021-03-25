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

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  // const navigation = useNavigation();

  // useEffect(()=> {
  //   if (AsyncStorage.getItem('newUser')) {
  //     // navigation.navigate('OnBoarding1');
  //   } else {
  //     console.log(AsyncStorage.getItem('newUser'));
  //   }
  //   console.log(AsyncStorage.getItem('newUser'));
  //   console.log("hello")
  // }, []);
  console.log("hello")
  AsyncStorage.setItem('newUser', 'yesyesyes');

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

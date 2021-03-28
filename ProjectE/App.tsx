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

  useEffect(() => {
    async function fetchData() {
      const newUser = await AsyncStorage.getItem('newUser');
      if (newUser == "true") {
        console.log("true!!");
      } else {
        // navigation.navigate('Onboarding');
        navigationRef.current?.navigate('RejectedModal', { uid: friendId.uid })
        console.log("false!!");
        await AsyncStorage.setItem('newUser', 'true');
      }
    }
    fetchData();
  })

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

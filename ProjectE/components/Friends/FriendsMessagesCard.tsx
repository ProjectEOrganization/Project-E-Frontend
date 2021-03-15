import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
// import { Text, View } from './Themed';
import { useFonts } from 'expo-font';
import { Text, View, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FriendsMessagesCard() {
  let [fontsLoaded] = useFonts({
    'Inter-Medium': require('../../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Bold': require('../../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-Regular': require('../../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-ExtraBold': require('../../assets/fonts/Inter/Inter-ExtraBold.ttf'),
  });

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('FriendsChatScreen')}
      >
        <View style={styles.topBar}>
          <View style={styles.profile}>
            <Image
              style={styles.profileImage}
              source={require('../../assets/images/Profile-Male-PNG.png')}
            />

            <View>
              <Text style={styles.firstText}>Nick</Text>
              <Text style={styles.secondText}>Remember that time i gave..</Text>
            </View>
          </View>

          <View style={styles.notifications}>
            <Text style={{ color: 'white' }}>5</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 6 },
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    width: '103%',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: 65,
    width: 65,
    marginLeft: 20,
    marginRight: 25,
  },
  notifications: {
    backgroundColor: '#FF0B2B',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    alignSelf: 'flex-start',
  },
  firstText: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#21293A',
  },
  secondText: {
    fontSize: 10,
    fontFamily: 'Inter-SemiBold',
    color: '#919191',
    marginTop: 5,
  },
});

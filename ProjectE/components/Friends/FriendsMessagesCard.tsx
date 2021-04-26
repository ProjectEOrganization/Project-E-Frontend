import React from 'react';
import { Alert, Dimensions, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
const { width } = Dimensions.get('screen')
import { useFonts } from 'expo-font';
import { Text, View, TextInput, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { deleteChat, IChat } from '../../store/reducers/chat';
import { api } from '../../services/api';
import { store } from '../../store';

export default function FriendsMessagesCard(props: IChat) {
  const navigation = useNavigation();

  const deleteChatAction = async () => {
    Alert.alert(`Are you sure?`, `Delete chat with ${props.user.displayName}`, [
      { text: 'Cancel' },
      { text: 'Delete', style: "destructive", onPress: () => store.dispatch(deleteChat(props.id)) }
    ])
  }

  return (
    <Pressable
      delayLongPress={1000}
      onLongPress={deleteChatAction}
      onPress={() => navigation.navigate('FriendsChatScreen', props)}
    >
      <View style={styles.topBar}>
        <Image
          style={[styles.profileImage, { width: props.user.photoURL ? 45 : 65 }]}
          source={props.user.photoURL ? { uri: props.user.photoURL } : require('../../assets/images/Profile-Male-PNG.png')}
          resizeMode="contain"
        />

        <View style={[styles.profile, { flex: 1 }]}>
          <Text style={styles.firstText}>{props.user.displayName}</Text>
          <Text numberOfLines={3} style={styles.secondText}>{props.content}</Text>
        </View>


        {props.missed > 0 && <View style={styles.notifications}>
          <Text style={{ color: 'white' }}>{props.missed}</Text>
        </View>}

      </View>
    </Pressable>
  );
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
    width: width * 0.85,
  },
  profile: {
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1
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

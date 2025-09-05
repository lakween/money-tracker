import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text } from 'react-native';


export default function TabLayout() {
  return (
    <>
      <View className={'py-10 pt-12 flex justify-center items-center'}>
        <Text className=' text-2xl text-gre'>
          Incoimng Outgoing Payment Tracker
        </Text>
      </View>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#ffd33d',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown:false,
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
            ),
          }} />
        <Tabs.Screen
          name="about"
          options={{
            headerShown:false,
            title: 'Accounts',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
            ),
          }} />
      </Tabs>
    </>
  );
}

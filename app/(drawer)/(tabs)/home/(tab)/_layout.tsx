import React from 'react';
import { Tabs } from 'expo-router';
import {
  FontAwesome,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#02182B',
          height: 110,
          paddingTop: 10,
          paddingBottom: 18,
          borderTopWidth: 0,
          elevation: 10,
        },
        tabBarItemStyle: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarIconStyle: {
          width: 48,
          height: 48,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home-outline"
              size={38}
              color={focused ? '#AFFC41' : 'white'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Completed"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="check-circle-outline"
              size={38}
              color={focused ? '#AFFC41' : 'white'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Subjects"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="book-open"
              size={38}
              color={focused ? '#AFFC41' : 'white'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-outline"
              size={38}
              color={focused ? '#AFFC41' : 'white'}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

import React from 'react';

import { Tabs } from 'expo-router';

import { TabBarIcon } from '@/src/components/TabBarIcon/TabBarIcon';
import { Colors } from '@/src/constants/Colors';

export default function TabLayout() {
  const colorScheme = 'dark';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tabIconSelected,
        headerTintColor: Colors[colorScheme ?? 'light'].tabIconSelected,
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(teams)"
        options={{
          title: 'Meu perfil',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'football' : 'football-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

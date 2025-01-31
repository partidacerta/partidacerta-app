/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { LinearGradient } from 'expo-linear-gradient';
import { Tabs } from 'expo-router';

import { TabBarIcon } from '@/src/components/TabBarIcon/TabBarIcon';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Colors } from '@/src/constants/Colors';
import useAuthStore from '@/src/store/auth/auth.store';

import LoginStack from '../Login.stack';

interface ButtonNavbarProps {
  icon: any;
  focused: boolean;
  label: string;
  widthButton: number;
}

export default function TabLayout() {
  const colorScheme = 'dark';
  const { accessToken } = useAuthStore();

  const ButtonNavbar = ({
    focused,
    icon,
    label,
    widthButton,
  }: ButtonNavbarProps) => {
    const width = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
      return {
        width: width.value,
      };
    });

    useEffect(() => {
      width.value = withTiming(focused ? widthButton : 0, {
        duration: 300,
      });
    }, [focused]);

    return (
      <>
        {focused ? (
          <LinearGradient
            colors={['#0d6efd7f', '#0a30677f']}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              gap: 4,
              paddingHorizontal: 12,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
            }}
          >
            <TabBarIcon name={icon} color={Colors.white} size={24} />
            <Animated.View style={[{ overflow: 'hidden' }, animatedStyle]}>
              <ThemedText>{label}</ThemedText>
            </Animated.View>
          </LinearGradient>
        ) : (
          <TabBarIcon name={icon} color={Colors.white} size={24} />
        )}
      </>
    );
  };

  return (
    <>
      {!accessToken ? (
        <LoginStack />
      ) : (
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor:
              Colors[colorScheme ?? 'light'].tabIconSelected,
            headerTintColor: Colors[colorScheme ?? 'light'].tabIconSelected,
            headerStyle: {
              backgroundColor: Colors[colorScheme ?? 'light'].background,
            },
            tabBarShowLabel: false,
            tabBarStyle: {
              position: 'absolute',
              paddingBottom: 0,
              marginBottom: 30,
              marginHorizontal: 14,
              borderRadius: 24,
              backgroundColor: Colors.darkOpacity,
              height: 68,
            },
          }}
        >
          <Tabs.Screen
            name="(home)"
            options={{
              title: 'Home',
              tabBarIcon: ({ focused }) => (
                <ButtonNavbar
                  focused={focused}
                  icon="home-outline"
                  label="Home"
                  widthButton={40}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="(matches)"
            options={{
              title: 'Minhas partidas',
              tabBarIcon: ({ focused }) => (
                <ButtonNavbar
                  focused={focused}
                  icon="football-outline"
                  label="Partidas"
                  widthButton={52}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="(profile)"
            options={{
              title: 'Meu perfil',
              tabBarIcon: ({ focused }) => (
                <ButtonNavbar
                  focused={focused}
                  icon="person-outline"
                  label="Perfil"
                  widthButton={34}
                />
              ),
            }}
          />
        </Tabs>
      )}
    </>
  );
}

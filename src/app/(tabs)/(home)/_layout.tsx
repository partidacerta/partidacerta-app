import { Stack } from 'expo-router';

import { Colors } from '@/src/constants/Colors';

import 'react-native-reanimated';

export default function RootLayout() {
  const colorScheme = 'dark';

  return (
    <Stack
      screenOptions={{
        animation: 'fade',
        headerShown: true,
        headerBackTitleVisible: true,
        headerTintColor: Colors[colorScheme ?? 'light'].text,
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Home',
        }}
      />
      <Stack.Screen
        name="UserProfile.stack"
        options={{
          headerTitle: 'Perfil',
        }}
      />
    </Stack>
  );
}

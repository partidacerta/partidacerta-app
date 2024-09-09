import { Stack } from 'expo-router';

import { Colors } from '@/src/constants/Colors';

import 'react-native-reanimated';

export default function RootLayout() {
  const colorScheme = 'dark';

  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: Colors[colorScheme ?? 'light'].text,
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: 'Home',
        }}
      />
      <Stack.Screen
        name="UserProfile.stack"
        options={{
          headerShown: true,
          headerTitle: 'Perfil',
        }}
      />
    </Stack>
  );
}

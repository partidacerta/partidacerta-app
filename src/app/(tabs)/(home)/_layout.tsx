import { Stack } from 'expo-router';

import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: true, headerTitle: 'Home' }}
      />
      <Stack.Screen
        name="UserProfile.stack"
        options={{ headerShown: true, headerTitle: 'Perfil' }}
      />
    </Stack>
  );
}

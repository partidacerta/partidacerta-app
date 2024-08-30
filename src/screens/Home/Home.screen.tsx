import { Text } from 'react-native';

import { Link } from 'expo-router';

import { ThemedView } from '@/src/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView>
      <Text>HOME SCREEN</Text>
      <Text>HOME SCREEN</Text>
      <Text>HOME SCREEN</Text>
      <Text>HOME SCREEN</Text>
      <Link href={'./UserProfile.stack'}>TESTE ROTA PARA PROFILE</Link>
      <Link href={'../Login.stack'}>TESTE ROTA PARA LOGIN</Link>
    </ThemedView>
  );
}

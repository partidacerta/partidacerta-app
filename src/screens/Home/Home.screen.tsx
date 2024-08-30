import { Link } from 'expo-router';

import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { ThemedView } from '@/src/components/ThemedView/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView>
      <ThemedText type="title">HOME SCREEN</ThemedText>
      <Link href={'./UserProfile.stack'}>
        <ThemedText type="link">TESTE ROTA PARA PROFILE</ThemedText>
      </Link>
      <Link href={'../Login.stack'}>
        <ThemedText type="link">TESTE ROTA PARA LOGIN</ThemedText>
      </Link>
    </ThemedView>
  );
}

import { TouchableOpacity } from 'react-native';

import { Link } from 'expo-router';

import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { ThemedView } from '@/src/components/ThemedView/ThemedView';
import useAuthStore from '@/src/store/auth/auth.store';

import * as S from './Home.styles';

export default function HomeScreen() {
  const { count, decrement, increment } = useAuthStore();

  return (
    <ThemedView>
      <ThemedText type="title">HOME SCREEN</ThemedText>
      <Link href={'./UserProfile.stack'}>
        <ThemedText type="link">TESTE ROTA PARA PROFILE</ThemedText>
      </Link>
      <Link href={'../Login.stack'}>
        <ThemedText type="link">TESTE ROTA PARA LOGIN</ThemedText>
      </Link>
      <ThemedText>{count}</ThemedText>
      <TouchableOpacity onPress={decrement}>
        <ThemedText>-</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity onPress={increment}>
        <ThemedText>+</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

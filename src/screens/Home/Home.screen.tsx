import { Link, router } from 'expo-router';

import { Button } from '@/src/components/Button/Button';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import useAuthStore from '@/src/store/auth/auth.store';

import * as S from './Home.styles';

export default function HomeScreen() {
  const { count, decrement, increment, login } = useAuthStore();

  function testingLogin() {
    // login({ email: 'cesars@email.com', password: '!@C12345' });
    login({ email: 'cesars@email.com', password: 'senhaerrada' });
  }

  return (
    <ThemedScrollView>
      <ThemedText type="title">Entrar</ThemedText>
      <ThemedText>HOME SCREEN</ThemedText>
      <Link href={'./UserProfile.stack'}>
        <ThemedText type="link">TESTE ROTA PARA PROFILE</ThemedText>
      </Link>
      <Link href={'../Login.stack'}>
        <ThemedText type="link">TESTE ROTA PARA LOGIN</ThemedText>
      </Link>
      <ThemedText>{count}</ThemedText>
      <Button onPress={decrement} text="-" />
      <Button onPress={increment} text="+" />
      <Button
        text="Ir para login"
        onPress={() => router.push('../Login.stack')}
      />
      <Button type="secondary" text="Testar LOGIN" onPress={testingLogin} />
    </ThemedScrollView>
  );
}

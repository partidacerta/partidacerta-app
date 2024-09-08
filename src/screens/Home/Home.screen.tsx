import { Link, router } from 'expo-router';

import { Button } from '@/src/components/Button/Button';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';

import * as S from './Home.styles';

export default function HomeScreen() {
  return (
    <ThemedScrollView>
      <ThemedText type="title">HOME SCREEN</ThemedText>
      <Button
        text="Testar tela Not Found"
        onPress={() => router.push('./login.stack')}
      />
      {/* <Button
        text="Sair"
        onPress={() => router.push('/(tabs)/(home)/Login.stack')}
      />
      <Link href={'/Login.stack'}>
        <ThemedText>TESTE ROTA PARA LOGIN</ThemedText>
      </Link> */}
    </ThemedScrollView>
  );
}

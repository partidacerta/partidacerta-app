import { router } from 'expo-router';

import { Button } from '@/src/components/Button/Button';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';

import { useHomeController } from './Home.controller';
import * as S from './Home.styles';

export default function HomeScreen() {
  const { handleLogout } = useHomeController();

  return (
    <ThemedScrollView>
      <ThemedText type="title">HOME SCREEN</ThemedText>
      <Button
        text="Testar tela Not Found"
        onPress={() => router.push('./login.stack')}
      />
      <Button type="secondary" text="Sair" onPress={handleLogout} />
    </ThemedScrollView>
  );
}

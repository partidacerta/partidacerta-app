import { router } from 'expo-router';

import { Button } from '@/src/components/Button/Button';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';

import { useHomeController } from './Home.controller';
import * as S from './Home.styles';
import Checkbox from '@/src/components/Checkbox/Checkbox';
import { useState } from 'react';

export default function HomeScreen() {
  const [isChecked, setChecked] = useState(false);

  return (
    <ThemedScrollView>
      <ThemedText type="title">HOME SCREEN</ThemedText>
      <Button
        text="Testar tela Not Found"
        onPress={() => router.push('./login.stack')}
      />
      <Button
        type="secondary"
        text="Sair"
        onPress={() => router.replace('/Login.stack')}
      />
      <Checkbox
        label="Li e concordo com os termos"
        value={isChecked}
        onValueChange={setChecked}
        isChecked={isChecked}
      />
    </ThemedScrollView>
  );
}

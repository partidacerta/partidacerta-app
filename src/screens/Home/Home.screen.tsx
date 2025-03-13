import { router } from 'expo-router';

import { Button } from '@/src/components/Button/Button';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';

export default function HomeScreen() {
  return (
    <ThemedScrollView>
      <Button
        text="Criar time"
        onPress={() => router.push('/RegisterTeam.stack')}
      />
      <Button
        text="Listar times"
        onPress={() => router.push('/ListTeams.stack')}
      />
    </ThemedScrollView>
  );
}

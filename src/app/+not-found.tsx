import { router } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';

import { Button } from '../components/Button/Button';
import { ThemedText } from '../components/ThemedText/ThemedText';
import { ThemedView } from '../components/ThemedView/ThemedView';
import { Colors } from '../constants/Colors';

export default function NotFoundScreen() {
  return (
    <ThemedView justifyCenter alignCenter>
      <Ionicons name={'warning-sharp'} size={64} color={Colors.white} />
      <ThemedText
        size={32}
        type="title"
        style={{ marginBottom: 60, marginTop: 16 }}
      >
        404 not found
      </ThemedText>
      <Button
        type="secondary"
        text="Voltar"
        onPress={() => router.push('/(home)')}
      />
    </ThemedView>
  );
}

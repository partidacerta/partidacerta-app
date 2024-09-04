import { Text } from 'react-native';

import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { ThemedView } from '@/src/components/ThemedView/ThemedView';

export default function LoginScreen() {
  return (
    <ThemedView>
      <ThemedText type="title">LOGIN SCREEN</ThemedText>
    </ThemedView>
  );
}

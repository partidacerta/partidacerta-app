import { Text } from 'react-native';

import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { ThemedView } from '@/src/components/ThemedView/ThemedView';

export default function UserProfileScreen() {
  return (
    <ThemedView>
      <ThemedText type="title">USER PROFILE SCREEN</ThemedText>
    </ThemedView>
  );
}

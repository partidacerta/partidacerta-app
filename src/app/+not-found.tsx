import { StyleSheet } from 'react-native';

import { Link, Stack } from 'expo-router';

import { ThemedText } from '../components/ThemedText/ThemedText';
import { ThemedView } from '../components/ThemedView/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <ThemedText size={32} type="title">
          TELA NÃO ENCONTRADA
        </ThemedText>
        <Link href="/(home)" style={styles.link}>
          <ThemedText type="link">IR PARA HOME</ThemedText>
        </Link>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">IR PARA LOGIN</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

import { TouchableOpacity } from 'react-native';
import { useToast } from 'react-native-toast-notifications';

import { Link, router } from 'expo-router';

import { Button } from '@/src/components/Button/Button';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import useAuthStore from '@/src/store/auth/auth.store';

import * as S from './Home.styles';

export default function HomeScreen() {
  const { count, decrement, increment } = useAuthStore();

  const toast = useToast();

  function TestToast() {
    // toast.show('Toast com sucesso', { type: 'success' });
    // const id = toast.show('Loading...');
    // toast.update(id, 'Loading completed', { type: 'success' });
    const id = toast.show('Testando toast...', { type: 'info' });
    toast.hideAll();
  }

  return (
    <ThemedScrollView>
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
      <Button
        type="primary"
        text="Button"
        onPress={() => router.push('../Login.stack')}
      />
      <Button type="secondary" text="Testar toast" onPress={TestToast} />
    </ThemedScrollView>
  );
}

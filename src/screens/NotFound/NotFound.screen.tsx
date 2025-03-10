import { ThemedView } from '@/src/components/ThemedView/ThemedView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Button } from '@/src/components/Button/Button';
import { router } from 'expo-router';
import NotFound from '@/src/assets/svgs/images/notFound.svg';
import * as S from './NotFound.styles';

export default function NotFoundScreen() {
  return (
    <ThemedView justifyCenter alignCenter>
      <NotFound />
      <S.ContainerText>
        <ThemedText type="bold" style={{ fontSize: 24 }}>
          Ops! Ocorreu algum erro!
        </ThemedText>
        <ThemedText textAlign="center">
          Parece que você tentou acessar algo que não está disponível no
          momento. Volte para a tela inicial.
        </ThemedText>
      </S.ContainerText>
      <Button
        type="primary"
        text="Ir para tela inicial"
        onPress={() => router.push('/(home)')}
        style={{ width: 200, marginTop: 40 }}
      />
    </ThemedView>
  );
}

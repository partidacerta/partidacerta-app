import { ThemedView } from '@/src/components/ThemedView/ThemedView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Button } from '@/src/components/Button/Button';
import { router } from 'expo-router';
import Judge from '../../assets/svgs/images/judge.svg';
import * as S from './NotFound.styles';

export default function NotFoundScreen() {
  return (
    <ThemedView justifyCenter alignCenter>
      <S.ContainerText>
        <ThemedText size={32} type="title">
          Ops! Ocorreu algum erro!
        </ThemedText>
        <ThemedText textAlign="center">
          Parece que você tentou acessar algo que não pode ser acessado nesse
          momento. Volte para a tela inicial.
        </ThemedText>
      </S.ContainerText>
      <Judge />
      <S.ContainerButton>
        <Button
          type="primary"
          text="Ir para tela inicial"
          onPress={() => router.push('/(home)')}
        />
      </S.ContainerButton>
    </ThemedView>
  );
}

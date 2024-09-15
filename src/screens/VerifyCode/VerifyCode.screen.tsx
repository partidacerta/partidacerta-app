import * as S from './VerifyCode.styles';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { router } from 'expo-router';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import Input from '@/src/components/Input/Input';
import { Button } from '@/src/components/Button/Button';
import { useVerifyCodeController } from './VerifyCode.controller';

export default function VerifyCodeScreen() {
  const { isValid, errors, control, handleSubmit, onSubmitVerifyCode } =
    useVerifyCodeController();

  return (
    <ThemedScrollView>
      <S.ContainerText>
        <ThemedText type="title">Código de acesso</ThemedText>
        <ThemedText>Digite o código que você recebeu via e-mail.</ThemedText>
      </S.ContainerText>
      <S.ContainerInputs>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </S.ContainerInputs>
      <S.ContainerButton>
        <Button
          text="Confirmar"
          onPress={() => router.push('./NewPassword.stack')}
        />
        <ThemedText>Não Recebi o código, reenviar.</ThemedText>
      </S.ContainerButton>
    </ThemedScrollView>
  );
}

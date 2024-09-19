import * as S from './VerifyCode.styles';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { router } from 'expo-router';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import Input from '@/src/components/Input/Input';
import { Button } from '@/src/components/Button/Button';
import { useVerifyCodeController } from './VerifyCode.controller';
import { Controller } from 'react-hook-form';

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
        <Controller
          name="code"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Código de verificação"
              keyboardType="numeric"
              maxLength={6}
              value={value}
              onChangeText={onChange}
              error={errors?.code && errors?.code?.message}
              autoCapitalize="none"
            />
          )}
        />
      </S.ContainerInputs>
      <S.ContainerButton>
        <Button
          text="Confirmar"
          onPress={handleSubmit(onSubmitVerifyCode)}
          disabled={!isValid}
        />
        <ThemedText>Não recebi o código, reenviar.</ThemedText>
      </S.ContainerButton>
    </ThemedScrollView>
  );
}

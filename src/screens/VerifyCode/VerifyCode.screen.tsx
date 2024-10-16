import { Controller } from 'react-hook-form';

import { Button } from '@/src/components/Button/Button';
import Input from '@/src/components/Input/Input';
import { LoadingScreen } from '@/src/components/LoadingScreen/LoadingScreen';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';

import { useVerifyCodeController } from './VerifyCode.controller';
import * as S from './VerifyCode.styles';

export default function VerifyCodeScreen() {
  const {
    isValid,
    errors,
    control,
    handleSubmit,
    onSubmitVerifyCode,
    handleResendResetCode,
    isLoading,
  } = useVerifyCodeController();

  return (
    <ThemedScrollView>
      <LoadingScreen isLoading={isLoading} />

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
        <Button
          type="link"
          text="Não recebi o código, reenviar."
          onPress={handleResendResetCode}
        />
      </S.ContainerButton>
    </ThemedScrollView>
  );
}

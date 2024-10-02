import { Controller } from 'react-hook-form';

import { Ionicons } from '@expo/vector-icons';

import { Button } from '@/src/components/Button/Button';
import Input from '@/src/components/Input/Input';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Colors } from '@/src/constants/Colors';

import { useForgotPasswordController } from './ForgotPassword.controller';
import * as S from './ForgotPassword.styles';

export default function ForgotPasswordScreen() {
  const { control, handleSubmit, errors, isValid, onSubmitForgotPassword } =
    useForgotPasswordController();

  return (
    <ThemedScrollView>
      <S.ContainerText>
        <ThemedText type="title">Esqueceu sua senha?</ThemedText>
        <ThemedText>
          Você receberá um e-mail contendo o código para alterar sua senha.
        </ThemedText>
      </S.ContainerText>
      <S.ContainerInputs>
        <Controller
          name="email"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="E-mail"
              icon={
                <Ionicons
                  name="person-outline"
                  size={24}
                  color={Colors.gray300}
                />
              }
              onChangeText={onChange}
              value={value}
              error={errors?.email && errors?.email?.message}
              maxLength={50}
              autoCapitalize="none"
            />
          )}
        />
      </S.ContainerInputs>
      <Button
        text="Solicitar código"
        onPress={handleSubmit(onSubmitForgotPassword)}
        disabled={!isValid}
      />
    </ThemedScrollView>
  );
}

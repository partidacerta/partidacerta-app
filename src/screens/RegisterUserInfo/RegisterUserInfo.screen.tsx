import { Controller } from 'react-hook-form';

import { Button } from '@/src/components/Button/Button';
import Input from '@/src/components/Input/Input';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { ThemedView } from '@/src/components/ThemedView/ThemedView';

import { useRegisterUserInfoController } from './RegisterUserInfo.controller';
import * as S from './RegisterUserInfo.styles';

export default function RegisterUserInfoScreen() {
  const { control, errors, onSubmitRegisterUserInfo, isValid } =
    useRegisterUserInfoController();

  return (
    <ThemedView>
      <ThemedText type="title">Informações gerais do jogador</ThemedText>
      <S.ContainerInputs>
        <Controller
          name="name"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Nome"
              onChangeText={onChange}
              value={value}
              error={errors?.name && errors?.name?.message}
              maxLength={50}
              autoCapitalize="none"
            />
          )}
        />
        <Controller
          name="nickname"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Nickname"
              onChangeText={onChange}
              value={value}
              error={errors?.nickname && errors?.nickname?.message}
              maxLength={50}
              autoCapitalize="none"
            />
          )}
        />
      </S.ContainerInputs>
      <S.ContainerButton>
        <Button
          type="primary"
          text="Continuar"
          disabled={!isValid}
          onPress={onSubmitRegisterUserInfo}
        />
      </S.ContainerButton>
    </ThemedView>
  );
}

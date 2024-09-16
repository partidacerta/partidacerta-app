import { Controller } from 'react-hook-form';

import { router } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';

import { Button } from '@/src/components/Button/Button';
import Input from '@/src/components/Input/Input';
import { ThemedView } from '@/src/components/ThemedView/ThemedView';
import { Colors } from '@/src/constants/Colors';

import Logo from '../../assets/svgs/images/logotipo.svg';
import { useLoginController } from './Login.controller';
import * as S from './Login.styles';

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    errors,
    isValid,
    onSubmitLogin,
    isVisiblePassword,
    handleShowPassword,
  } = useLoginController();

  return (
    <ThemedView justifyCenter alignCenter>
      <Logo width={200} height={200} />
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
        <Controller
          name="password"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Senha"
              icon={
                <Ionicons
                  name={!isVisiblePassword ? 'eye-off-outline' : 'eye-outline'}
                  size={24}
                  color={Colors.gray300}
                  onPress={handleShowPassword}
                />
              }
              onChangeText={onChange}
              value={value}
              error={errors?.password && errors?.password?.message}
              secureTextEntry={isVisiblePassword}
              maxLength={8}
              autoCapitalize="none"
            />
          )}
        />
        <Button
          type="link"
          text="Esqueci minha senha"
          onPress={() => router.push('/(tabs)/(home)')}
        />
      </S.ContainerInputs>
      <Button
        text="Entrar"
        onPress={handleSubmit(onSubmitLogin)}
        // disabled={!isValid}
      />
      <Button type="secondary" text="Cadastrar" />
    </ThemedView>
  );
}

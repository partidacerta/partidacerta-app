import { Controller } from 'react-hook-form';

import { router } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';

import { Button } from '@/src/components/Button/Button';
import Input from '@/src/components/Input/Input';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Colors } from '@/src/constants/Colors';
import { validateInputPassword } from '@/src/utils/validateInputPassword';

import Google from '../../assets/svgs/images/google.svg';
import { useRegisteUserController } from './RegisterUser.controller';
import * as S from './RegisterUser.styles';

export default function RegisterUserScreen() {
  const {
    control,
    errors,
    handleFormIsValid,
    onSubmitRegisterUser,
    isVisiblePassword,
    handleShowPassword,
    isVisibleConfirmPassword,
    handleShowConfirmPassword,
    watchPassword,
    dataValidateCharacteres,
  } = useRegisteUserController();

  return (
    <S.ContainerScreen>
      <ThemedText type="title">Crie uma conta</ThemedText>
      <S.ContainerSubtitle>
        <ThemedText type="default">Já possui uma conta? </ThemedText>
        <Button type="link" text="Login" onPress={() => router.back()} />
      </S.ContainerSubtitle>
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
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Confirmar senha"
              icon={
                <Ionicons
                  name={
                    !isVisibleConfirmPassword
                      ? 'eye-off-outline'
                      : 'eye-outline'
                  }
                  size={24}
                  color={Colors.gray300}
                  onPress={handleShowConfirmPassword}
                />
              }
              onChangeText={onChange}
              value={value}
              error={
                errors?.confirmPassword && errors?.confirmPassword?.message
              }
              secureTextEntry={isVisibleConfirmPassword}
              maxLength={8}
              autoCapitalize="none"
            />
          )}
        />
      </S.ContainerInputs>
      {dataValidateCharacteres.map((item, index) => (
        <S.Row key={index}>
          <S.TextCheckPassword>{item.label}</S.TextCheckPassword>
          <Ionicons
            name={'checkmark-sharp'}
            size={24}
            color={
              validateInputPassword({
                input: watchPassword,
                validationType: item.type as
                  | 'number'
                  | 'uppercase'
                  | 'lowercase'
                  | 'specialChar',
              })
                ? Colors.green
                : Colors.gray300
            }
          />
        </S.Row>
      ))}
      <S.FooterScreen>
        <Button
          type="primary"
          text="Continuar"
          disabled={!handleFormIsValid()}
          onPress={onSubmitRegisterUser}
        />
        <S.ContainerDivider>
          <S.Divider />
          <ThemedText>ou cadastra-se com</ThemedText>
          <S.Divider />
        </S.ContainerDivider>
        <S.ButtonGoogle>
          <Google />
        </S.ButtonGoogle>
      </S.FooterScreen>
    </S.ContainerScreen>
  );
}

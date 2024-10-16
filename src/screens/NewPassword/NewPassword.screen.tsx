import { Controller } from 'react-hook-form';

import { Ionicons } from '@expo/vector-icons';

import { Button } from '@/src/components/Button/Button';
import Input from '@/src/components/Input/Input';
import { LoadingScreen } from '@/src/components/LoadingScreen/LoadingScreen';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Colors } from '@/src/constants/Colors';
import { validateInputPassword } from '@/src/utils/validateInputPassword';

import { useNewPasswordController } from './NewPassword.controller';
import * as S from './NewPassword.styles';

export default function NewPasswordScreen() {
  const {
    control,
    handleSubmit,
    errors,
    handleFormIsValid,
    onSubmitNewPassword,
    isVisiblePassword,
    isVisibleConfirmPassword,
    handleShowPassword,
    handleShowConfirmPassword,
    dataValidateCharacteres,
    watchPassword,
    isLoading,
  } = useNewPasswordController();

  return (
    <ThemedScrollView>
      <LoadingScreen isLoading={isLoading} />

      <S.ContainerText>
        <ThemedText type="title">Alterando senha</ThemedText>
        <ThemedText>
          Digite o código e altere sua senha para efetuar login.
        </ThemedText>
      </S.ContainerText>
      <S.ContainerInputs>
        <Controller
          name="password"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Nova senha"
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
      <S.ContainerValidatorPassword>
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
      </S.ContainerValidatorPassword>
      <Button
        text="Alterar senha"
        onPress={handleSubmit(onSubmitNewPassword)}
        disabled={!handleFormIsValid()}
      />
    </ThemedScrollView>
  );
}

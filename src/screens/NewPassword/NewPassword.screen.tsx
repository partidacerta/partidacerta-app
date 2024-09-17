import { Ionicons } from '@expo/vector-icons';
import * as S from './NewPassword.styles';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { Colors } from '@/src/constants/Colors';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import Input from '@/src/components/Input/Input';
import { Button } from '@/src/components/Button/Button';
import { useNewPasswordController } from './NewPassword.controller';
import { Controller } from 'react-hook-form';

export default function NewPasswordScreen() {
  const {
    control,
    handleSubmit,
    errors,
    isValid,
    onSubmitNewPassword,
    isVisiblePassword,
    isVisibleConfirmPassword,
    handleShowPassword,
    handleShowConfirmPassword,
  } = useNewPasswordController();

  return (
    <ThemedScrollView>
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
              maxLength={20}
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
              maxLength={20}
              autoCapitalize="none"
            />
          )}
        />
      </S.ContainerInputs>
      <Button
        text="Alterar senha"
        onPress={handleSubmit(onSubmitNewPassword)}
        disabled={!isValid}
      />
    </ThemedScrollView>
  );
}

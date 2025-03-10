import { Controller } from 'react-hook-form';

import { router } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';

import { Button } from '@/src/components/Button/Button';
import Input from '@/src/components/Input/Input';
import { LoadingScreen } from '@/src/components/LoadingScreen/LoadingScreen';
import Modalize from '@/src/components/Modalize/Modalize';
import { Colors } from '@/src/constants/Colors';

import { useLoginController } from '../Login.controller';
import * as S from '../Login.styles';

interface ModalLoginProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ModalLogin({ isVisible, onClose }: ModalLoginProps) {
  const {
    control,
    handleSubmit,
    errors,
    isValid,
    onSubmitLogin,
    isVisiblePassword,
    handleShowPassword,
    isLoading,
  } = useLoginController();

  return (
    <Modalize
      visible={isVisible}
      onClose={onClose}
      backgroundColor={Colors.darkBlue}
      borderRadius="40px"
    >
      <LoadingScreen isLoading={isLoading} />
      <S.ContainerModal>
        <S.ContainerInputs>
          <Controller
            name="email"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                label="E-mail"
                placeholder="E-mail"
                icon={
                  <Ionicons
                    name="person-outline"
                    size={24}
                    color={Colors.gray300}
                  />
                }
                onChangeText={e => onChange(e.trim().replace(/ /g, ''))}
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
                label="Senha"
                placeholder="Senha"
                icon={
                  <Ionicons
                    name={
                      !isVisiblePassword ? 'eye-off-outline' : 'eye-outline'
                    }
                    size={24}
                    color={Colors.gray300}
                    onPress={handleShowPassword}
                  />
                }
                onChangeText={e => onChange(e.trim().replace(/ /g, ''))}
                value={value}
                error={errors?.password && errors?.password?.message}
                secureTextEntry={isVisiblePassword}
                maxLength={20}
                autoCapitalize="none"
              />
            )}
          />
          <S.ContainerButton>
            <Button
              type="link"
              text="Esqueci minha senha"
              onPress={() => router.push('./ForgotPassword.stack')}
            />
          </S.ContainerButton>
        </S.ContainerInputs>
        <Button
          text="Entrar"
          onPress={handleSubmit(onSubmitLogin)}
          disabled={!isValid}
        />
      </S.ContainerModal>
    </Modalize>
  );
}

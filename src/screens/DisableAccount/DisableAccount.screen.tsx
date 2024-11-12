import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { LoadingScreen } from '@/src/components/LoadingScreen/LoadingScreen';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import Input from '@/src/components/Input/Input';
import { Button } from '@/src/components/Button/Button';
import { Colors } from '@/src/constants/Colors';

import { Controller } from 'react-hook-form';

import * as S from './DisableAccount.styles';
import ModalDisableAccount from './components/ModalDisableAccount';
import { useDisableAccountController } from './DisableAccount.controller';

import { Ionicons } from '@expo/vector-icons';

export default function DisableAccountScreen() {
  const {
    isLoading,
    isModalVisible,
    isVisiblePassword,
    handleShowPassword,
    handleOpenModal,
    handleCloseModal,
    handleDisableAccount,
    control,
    errors,
    isValid,
  } = useDisableAccountController();

  return (
    <ThemedScrollView>
      <LoadingScreen isLoading={isLoading} />

      <S.Container>
        <ThemedText type="title">Desativar conta</ThemedText>
        <ThemedText>
          Não se preocupe ao desativar sua conta, você poderá reativá-la a
          qualquer momento. Se um dia decidir voltar, estaremos prontos para
          recebê-lo de braços abertos! Sentiremos sua falta em campo.
        </ThemedText>
        <S.ContainerInput>
          <Controller
            name="password"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
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
                secureTextEntry={isVisiblePassword}
                onChangeText={onChange}
                value={value}
                error={errors?.password && errors?.password?.message}
              />
            )}
          />
        </S.ContainerInput>
        <Button
          text="Desativar conta"
          style={{ backgroundColor: Colors.red }}
          onPress={handleOpenModal}
          disabled={!isValid}
        />
      </S.Container>

      <ModalDisableAccount
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onDisableAccount={handleDisableAccount}
      />
    </ThemedScrollView>
  );
}

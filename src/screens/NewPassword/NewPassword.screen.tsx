import { Ionicons } from '@expo/vector-icons';
import * as S from './NewPassword.styles';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { router } from 'expo-router';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import Input from '@/src/components/Input/Input';
import { Button } from '@/src/components/Button/Button';

export default function NewPasswordScreen() {
  return (
    <ThemedScrollView>
      <S.ContainerText>
        <ThemedText type="title">Alterando senha</ThemedText>
        <ThemedText>
          Digite o código e altere sua senha para efetuar login.
        </ThemedText>
      </S.ContainerText>
      <S.ContainerInputs>
        <Input
          placeholder="Nova senha"
          icon={
            <Ionicons
              // name={!isVisiblePassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color={Colors.gray300}
              // onPress={handleShowPassword}
            />
          }
        />
        <Input
          placeholder="Confirmar senha"
          icon={
            <Ionicons
              // name={!isVisiblePassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color={Colors.gray300}
              // onPress={handleShowPassword}
            />
          }
        />
      </S.ContainerInputs>
      <Button text="Alterar senha" />
    </ThemedScrollView>
  );
}

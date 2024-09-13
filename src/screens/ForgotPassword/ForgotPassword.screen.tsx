import { Button } from '@/src/components/Button/Button';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { router } from 'expo-router';
import * as S from './ForgotPassword.styles';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import Input from '@/src/components/Input/Input';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/src/constants/Colors';

export default function ForgotPasswordScreen() {
  return (
    <ThemedScrollView>
      <S.ContainerText>
        <ThemedText type="title">Esqueceu sua senha?</ThemedText>
        <ThemedText>
          Você receberá um e-mail contendo o código para alterar sua senha.
        </ThemedText>
      </S.ContainerText>
      <S.ContainerInputs>
        <Input
          placeholder="E-mail"
          icon={
            <Ionicons name="person-outline" size={24} color={Colors.gray300} />
          }
        />
      </S.ContainerInputs>
      <Button
        text="Solicitar código"
        onPress={() => router.push('./VerifyCode.stack')}
      />
    </ThemedScrollView>
  );
}

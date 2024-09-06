import { router } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';

import { Button } from '@/src/components/Button/Button';
import Input from '@/src/components/Input/Input';
import { ThemedView } from '@/src/components/ThemedView/ThemedView';
import { Colors } from '@/src/constants/Colors';

import Logo from '../../assets/svgs/images/logotipo.svg';
import * as S from './Login.styles';

export default function LoginScreen() {
  return (
    <ThemedView justifyContent alignItems>
      <Logo width={200} height={200} />
      <S.ContainerInputs>
        <Input
          placeholder="E-mail"
          icon={
            <Ionicons name="person-outline" size={24} color={Colors.gray300} />
          }
        />
        <Input
          placeholder="Senha"
          icon={
            <Ionicons name="eye-outline" size={24} color={Colors.gray300} />
          }
        />
        <Button type="link" text="Esqueci minha senha" />
      </S.ContainerInputs>
      <Button text="Entrar" onPress={() => router.push('/(tabs)/(home)')} />
      <Button type="secondary" text="Cadastrar" />
    </ThemedView>
  );
}

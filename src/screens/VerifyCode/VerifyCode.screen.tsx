import { AntDesign } from '@expo/vector-icons';
import * as S from './VerifyCode.styles';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { router } from 'expo-router';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import Input from '@/src/components/Input/Input';
import { Button } from '@/src/components/Button/Button';

export default function VerifyCodeScreen() {
  return (
    <ThemedScrollView>
      <S.ContainerIcon>
        <AntDesign
          name="left"
          size={24}
          color={Colors.white}
          onPress={() => router.push('./ForgotPassword.stack')}
        />
      </S.ContainerIcon>
      <S.ContainerText>
        <ThemedText type="title">Código de acesso</ThemedText>
        <ThemedText>Digite o código que você recebeu via e-mail.</ThemedText>
      </S.ContainerText>
      <S.ContainerInputs>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </S.ContainerInputs>
      <S.ContainerButton>
        <Button
          text="Confirmar"
          onPress={() => router.push('./NewPassword.stack')}
        />
        <ThemedText>Não Recebi o código, reenviar.</ThemedText>
      </S.ContainerButton>
    </ThemedScrollView>
  );
}

import { router } from 'expo-router';

import { Button } from '@/src/components/Button/Button';
import { LoadingScreen } from '@/src/components/LoadingScreen/LoadingScreen';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Colors } from '@/src/constants/Colors';

import ModalLogin from './components/ModalLogin';
import { useLoginController } from './Login.controller';
import * as S from './Login.styles';

export default function LoginScreen() {
  const { isModalVisible, handleOpenModal, handleCloseModal } =
    useLoginController();

  return (
    <S.Container source={require('@/assets/images/initialPage.png')}>
      <S.ContainerText>
        <ThemedText type="bold" style={{ fontSize: 24, color: Colors.black }}>
          Organize partidas, crie times e desafie outros jogadores!
        </ThemedText>
      </S.ContainerText>
      <S.Containerbuttons>
        <Button
          type="secondary"
          text="Cadastrar"
          style={{ width: '42%' }}
          onPress={() => router.push('/RegisterUser.stack')}
        />
        <Button
          type="primary"
          text="Entrar"
          style={{ width: '42%' }}
          onPress={handleOpenModal}
        />
      </S.Containerbuttons>

      <ModalLogin isVisible={isModalVisible} onClose={handleCloseModal} />
    </S.Container>
  );
}

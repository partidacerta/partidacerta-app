import { Button } from '@/src/components/Button/Button';
import Modal from '@/src/components/Modal/Modal';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';

import { useHomeController } from './Home.controller';
import * as S from './Home.styles';

export default function HomeScreen() {
  const { handleLogout, isModalVisible, handleOpenModal, handleCloseModal } =
    useHomeController();

  return (
    <ThemedScrollView>
      <Button text="Sair" onPress={handleOpenModal} />
      <Modal visible={isModalVisible} onClose={handleCloseModal}>
        <S.ModalContent>
          <ThemedText>Tem certeza que deseja sair?</ThemedText>
          <S.ButtonModal>
            <Button
              type="secondary"
              text="Voltar"
              onPress={handleCloseModal}
              style={{ height: 42 }}
            />
            <Button text="Sair" onPress={handleLogout} style={{ height: 42 }} />
          </S.ButtonModal>
        </S.ModalContent>
      </Modal>
    </ThemedScrollView>
  );
}

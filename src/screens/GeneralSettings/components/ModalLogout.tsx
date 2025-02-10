import { Button } from '@/src/components/Button/Button';
import Modal from '@/src/components/Modal/Modal';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';

import * as S from '../GeneralSettings.styles';

interface ModalLogoutProps {
  isVisible: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export default function ModalLogout({
  isVisible,
  onClose,
  onLogout,
}: ModalLogoutProps) {
  return (
    <Modal visible={isVisible} onClose={onClose}>
      <S.ModalContent>
        <ThemedText>Tem certeza que deseja sair?</ThemedText>
        <S.ButtonModal>
          <Button
            type="secondary"
            text="Voltar"
            onPress={onClose}
            style={{ height: 42 }}
          />
          <Button text="Sair" onPress={onLogout} style={{ height: 42 }} />
        </S.ButtonModal>
      </S.ModalContent>
    </Modal>
  );
}

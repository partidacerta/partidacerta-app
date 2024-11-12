import { Button } from '@/src/components/Button/Button';
import Modal from '@/src/components/Modal/Modal';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Colors } from '@/src/constants/Colors';

import * as S from '../DisableAccount.styles';

interface ModalDisableAccountProps {
  isVisible: boolean;
  onClose: () => void;
  onDisableAccount: () => void;
}

export default function ModalDisableAccount({
  isVisible,
  onClose,
  onDisableAccount,
}: ModalDisableAccountProps) {
  return (
    <Modal visible={isVisible} onClose={onClose}>
      <S.ModalContent>
        <ThemedText>Tem certeza que deseja sair?</ThemedText>
        <S.ButtonModal>
          <Button
            type="secondary"
            text="Cancelar"
            onPress={onClose}
            style={{ height: 42 }}
          />
          <Button
            text="Desativar conta"
            onPress={onDisableAccount}
            style={{ height: 42, backgroundColor: Colors.red }}
          />
        </S.ButtonModal>
      </S.ModalContent>
    </Modal>
  );
}

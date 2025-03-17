import Modalize from '@/src/components/Modalize/Modalize';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Button } from '@/src/components/Button/Button';
import { Colors } from '@/src/constants/Colors';

import * as S from '../TeamProfile.styles';

interface ModalCancelRequestProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ModalCancelRequest({
  isVisible,
  onClose,
}: ModalCancelRequestProps) {
  return (
    <Modalize visible={isVisible} onClose={onClose}>
      <S.Modal>
        <S.ModalTitle>
          <ThemedText type="semiBold" style={{ fontSize: 20 }}>
            Tem certeza que deseja
          </ThemedText>
          <ThemedText type="bold" style={{ fontSize: 20 }}>
            cancelar solicitação?
          </ThemedText>
        </S.ModalTitle>
        <S.ModalButtons>
          <Button
            type="secondary"
            text="voltar"
            style={{ width: '45%' }}
            onPress={onClose}
          />
          <Button
            type="primary"
            text="Cancelar solicitação?"
            style={{ width: '45%', backgroundColor: Colors.red500 }}
          />
        </S.ModalButtons>
      </S.Modal>
    </Modalize>
  );
}

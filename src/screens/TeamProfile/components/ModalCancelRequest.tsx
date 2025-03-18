import { Button } from '@/src/components/Button/Button';
import Modalize from '@/src/components/Modalize/Modalize';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Colors } from '@/src/constants/Colors';

import { useTeamProfileController } from '../TeamProfile.controller';
import * as S from '../TeamProfile.styles';

interface ModalCancelRequestProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ModalCancelRequest({
  isVisible,
  onClose,
}: ModalCancelRequestProps) {
  const { handlePlayerRequestCancel } = useTeamProfileController();

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
            text="Cancelar solicitação"
            style={{ width: '45%', backgroundColor: Colors.red500 }}
            onPress={handlePlayerRequestCancel}
          />
        </S.ModalButtons>
      </S.Modal>
    </Modalize>
  );
}

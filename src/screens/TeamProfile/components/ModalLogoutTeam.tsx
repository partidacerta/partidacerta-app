import Modalize from '@/src/components/Modalize/Modalize';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Button } from '@/src/components/Button/Button';
import { Colors } from '@/src/constants/Colors';

import * as S from '../TeamProfile.styles';

interface ModalLogoutTeamProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ModalLogoutTeam({
  isVisible,
  onClose,
}: ModalLogoutTeamProps) {
  return (
    <Modalize visible={isVisible} onClose={onClose}>
      <S.Modal>
        <S.ModalTitle>
          <ThemedText type="semiBold" style={{ fontSize: 20 }}>
            Tem certeza que deseja sair
          </ThemedText>
          <ThemedText type="bold" style={{ fontSize: 20 }}>
            do time?
          </ThemedText>
        </S.ModalTitle>
        <S.ModalButtons>
          <Button
            type="secondary"
            text="Cancelar"
            style={{ width: '45%' }}
            onPress={onClose}
          />
          <Button
            type="primary"
            text="Sair"
            style={{ width: '45%', backgroundColor: Colors.red500 }}
          />
        </S.ModalButtons>
      </S.Modal>
    </Modalize>
  );
}

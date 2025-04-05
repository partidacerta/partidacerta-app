import { Button } from '@/src/components/Button/Button';
import Modalize from '@/src/components/Modalize/Modalize';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Colors } from '@/src/constants/Colors';

import { useTeamProfileController } from '../TeamProfile.controller';
import * as S from '../TeamProfile.styles';

interface ModalLeaveTeamTeamProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ModalLeaveTeam({
  isVisible,
  onClose,
}: ModalLeaveTeamTeamProps) {
  const { handleLeaveTeam } = useTeamProfileController();

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
            onPress={handleLeaveTeam}
          />
        </S.ModalButtons>
      </S.Modal>
    </Modalize>
  );
}

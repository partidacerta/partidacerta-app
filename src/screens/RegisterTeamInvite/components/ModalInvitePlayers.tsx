import Modalize from '@/src/components/Modalize/Modalize';
import Input from '@/src/components/Input/Input';
import { Colors } from '@/src/constants/Colors';
import { Button } from '@/src/components/Button/Button';

import * as S from '../RegisterTeamInvite.styles';

interface ModalInvitePlayersProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ModalInvitePlayers({
  isVisible,
  onClose,
}: ModalInvitePlayersProps) {
  return (
    <Modalize visible={isVisible} onClose={onClose}>
      <S.ModalContent>
        <S.ModalHeader>
          <Input
            label="Jogador"
            placeholder="Pesquise pelo nickname ou nome"
            width={'70%'}
            backgroundColor={Colors.darkBlue}
            maxLength={30}
          />
          <Button
            text="Buscar"
            borderRadius={'10px'}
            style={{ width: '25%', marginBottom: 16 }}
          />
        </S.ModalHeader>
        <S.ModalPlayers></S.ModalPlayers>
        <S.ModalFooter>
          <Button
            text="Cancelar"
            type="secondary"
            style={{ width: '45%' }}
            onPress={onClose}
          />
          <Button text="Concluir" style={{ width: '45%' }} />
        </S.ModalFooter>
      </S.ModalContent>
    </Modalize>
  );
}

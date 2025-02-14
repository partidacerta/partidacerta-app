import Modalize from '@/src/components/Modalize/Modalize';

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
      <S.ModalContent></S.ModalContent>
    </Modalize>
  );
}

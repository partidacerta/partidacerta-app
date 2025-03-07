import { TouchableOpacity } from 'react-native';

import Modalize from '@/src/components/Modalize/Modalize';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { IPlayer } from '@/src/services/player/player.dto';

import * as S from '../RegisterTeamInvite.styles';

interface ModalPlayerDetailsProps {
  isVisible: boolean;
  onClose: () => void;
  onRemovePlayer: (playerId: string) => void;
  player?: IPlayer | null;
}

export default function ModalPlayerDetails({
  isVisible,
  onClose,
  onRemovePlayer,
  player,
}: ModalPlayerDetailsProps) {
  return (
    <Modalize visible={isVisible} onClose={onClose}>
      <S.ModalDetails>
        <ThemedText
          type="semiBold"
          style={{ fontSize: 14, marginVertical: 22 }}
        >
          {player?.nickname}
        </ThemedText>
        <S.Divider />
        <S.BoxDetails>
          <TouchableOpacity>
            <ThemedText type="semiBold" style={{ fontSize: 12 }}>
              Ir para perfil
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (player) {
                onRemovePlayer(player.id);
              }
              onClose();
            }}
          >
            <ThemedText type="semiBold" style={{ fontSize: 12 }}>
              Remover Jogador
            </ThemedText>
          </TouchableOpacity>
        </S.BoxDetails>
      </S.ModalDetails>
    </Modalize>
  );
}

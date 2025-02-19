import { TouchableOpacity } from 'react-native';

import Modalize from '@/src/components/Modalize/Modalize';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';

import * as S from '../RegisterTeamInvite.styles';

interface ModalPlayerDetailsProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ModalPlayerDetails({
  isVisible,
  onClose,
}: ModalPlayerDetailsProps) {
  return (
    <Modalize visible={isVisible} onClose={onClose}>
      <S.ModalContent>
        <ThemedText
          type="semiBold"
          style={{ fontSize: 14, marginVertical: 22 }}
        >
          Nome do jogador
        </ThemedText>
        <S.Divider />
        <S.ModalDetails>
          <TouchableOpacity>
            <ThemedText type="semiBold" style={{ fontSize: 12 }}>
              Ir para perfil
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity>
            <ThemedText type="semiBold" style={{ fontSize: 12 }}>
              Remover Jogador
            </ThemedText>
          </TouchableOpacity>
        </S.ModalDetails>
      </S.ModalContent>
    </Modalize>
  );
}

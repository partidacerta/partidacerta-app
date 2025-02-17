import { ScrollView } from 'react-native';

import Modalize from '@/src/components/Modalize/Modalize';
import Input from '@/src/components/Input/Input';
import { Colors } from '@/src/constants/Colors';
import { Button } from '@/src/components/Button/Button';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';

import * as S from '../RegisterTeamInvite.styles';
import { useRegisterTeamInviteController } from '../RegisterTeamInvite.controller';

interface ModalInvitePlayersProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ModalInvitePlayers({
  isVisible,
  onClose,
}: ModalInvitePlayersProps) {
  const {
    players,
    isLoading,
    searchPlayer,
    setSearchPlayer,
    handleSearchPlayer,
  } = useRegisterTeamInviteController();

  return (
    <Modalize visible={isVisible} onClose={onClose}>
      <S.ModalContent>
        <S.ModalHeader>
          <Input
            label="Jogador"
            placeholder="Pesquise pelo nickname ou nome"
            width={'75%'}
            backgroundColor={Colors.darkBlue}
            maxLength={30}
            value={searchPlayer}
            onChangeText={setSearchPlayer}
          />
          <Button
            text="Buscar"
            borderRadius={'10px'}
            style={{ width: '20%', marginBottom: 16 }}
            onPress={handleSearchPlayer}
          />
        </S.ModalHeader>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <S.ModalPlayers>
            {isLoading ? (
              <ThemedText>loading</ThemedText>
            ) : players?.content?.length === 0 ? (
              <ThemedText style={{ textAlign: 'center', marginTop: 30 }}>
                Nenhum jogador encontrado
              </ThemedText>
            ) : (
              players?.content?.map(player => (
                <S.BoxPlayer key={player.id}>
                  <S.InfoPlayer>
                    <S.ImagePlayer
                      source={{
                        uri: player?.playerImage,
                      }}
                    />
                    <ThemedText type="semiBold" style={{ fontSize: 14 }}>
                      {player.nickname}
                    </ThemedText>
                  </S.InfoPlayer>
                  <Button
                    text="Convidar"
                    borderRadius={'10px'}
                    style={{
                      width: '30%',
                      height: 36,
                      backgroundColor: Colors.green900,
                    }}
                  />
                </S.BoxPlayer>
              ))
            )}
          </S.ModalPlayers>
        </ScrollView>
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

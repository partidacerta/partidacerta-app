import { ScrollView, ActivityIndicator } from 'react-native';

import Modalize from '@/src/components/Modalize/Modalize';
import Input from '@/src/components/Input/Input';
import { Colors } from '@/src/constants/Colors';
import { Button } from '@/src/components/Button/Button';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';

import { IPlayer } from '@/src/services/player/player.dto';

import * as S from '../RegisterTeamInvite.styles';
import { useRegisterTeamInviteController } from '../RegisterTeamInvite.controller';

interface ModalInvitePlayersProps {
  isVisible: boolean;
  onClose: () => void;
  onInvitePlayer: (player: IPlayer) => void;
  onRemovePlayer: (playerId: string) => void;
}

export default function ModalInvitePlayers({
  isVisible,
  onClose,
  onInvitePlayer,
  onRemovePlayer,
}: ModalInvitePlayersProps) {
  const {
    userAuth,
    players,
    isLoading,
    searchPlayer,
    setSearchPlayer,
    handleSearchPlayer,
    selectedPlayers,
    setSelectedPlayers,
    handleInvitePlayer,
  } = useRegisterTeamInviteController();

  const handleRemovePlayer = (playerId: string) => {
    setSelectedPlayers(prevState =>
      prevState.filter(player => player.id !== playerId)
    );
    onRemovePlayer(playerId);
  };

  const handleCompleteInvitation = () => {
    selectedPlayers.forEach(player => onInvitePlayer(player));
    onClose();
  };

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

        {selectedPlayers.length > 0 && (
          <ScrollView horizontal>
            <S.SelectedPlayer>
              {selectedPlayers.map(player => (
                <S.PlayerItem key={player.id}>
                  <S.Image source={{ uri: player?.playerImage }} />
                  <Button
                    icon="close"
                    sizeIcon={16}
                    colorIcon={Colors.black}
                    style={{
                      position: 'absolute',
                      bottom: -18,
                      right: 0,
                      width: 18,
                      height: 18,
                      backgroundColor: Colors.white,
                    }}
                    onPress={() => handleRemovePlayer(player.id)}
                  />
                </S.PlayerItem>
              ))}
            </S.SelectedPlayer>
          </ScrollView>
        )}

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <S.ModalPlayers>
            {isLoading ? (
              <ActivityIndicator style={{ marginTop: 30 }} />
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
                    disabled={
                      player.nickname === userAuth?.nickname ||
                      selectedPlayers.some(
                        selected => selected.id === player.id
                      )
                    }
                    onPress={() => handleInvitePlayer(player)}
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
          <Button
            text="Concluir"
            style={{ width: '45%' }}
            onPress={handleCompleteInvitation}
          />
        </S.ModalFooter>
      </S.ModalContent>
    </Modalize>
  );
}

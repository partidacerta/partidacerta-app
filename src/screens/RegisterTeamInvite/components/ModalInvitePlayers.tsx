import { ActivityIndicator, FlatList } from 'react-native';

import { Button } from '@/src/components/Button/Button';
import Input from '@/src/components/Input/Input';
import Modalize from '@/src/components/Modalize/Modalize';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Colors } from '@/src/constants/Colors';
import { IPlayer } from '@/src/services/player/player.dto';

import { useRegisterTeamInviteController } from '../RegisterTeamInvite.controller';
import * as S from '../RegisterTeamInvite.styles';

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

        <S.ContainerPlayersSelected>
          {selectedPlayers.length > 0 && (
            <FlatList
              horizontal
              data={selectedPlayers}
              keyExtractor={player => player.id.toString()}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item: player }) => (
                <S.SelectedPlayer>
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
                </S.SelectedPlayer>
              )}
            />
          )}
        </S.ContainerPlayersSelected>

        <S.ModalPlayers>
          {isLoading ? (
            <ActivityIndicator style={{ marginTop: 30 }} />
          ) : players?.content?.length === 0 ? (
            <ThemedText style={{ textAlign: 'center', marginTop: 30 }}>
              Nenhum jogador encontrado
            </ThemedText>
          ) : (
            <FlatList
              data={players?.content}
              keyExtractor={item => item.id.toString()}
              contentContainerStyle={{ flexGrow: 1 }}
              renderItem={({ item: player }) => (
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
              )}
            />
          )}
        </S.ModalPlayers>

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

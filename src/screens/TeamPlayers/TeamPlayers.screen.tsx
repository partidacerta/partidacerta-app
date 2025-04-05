import { TouchableOpacity } from 'react-native';

import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Colors } from '@/src/constants/Colors';

import { useTeamPlayersController } from './TeamPlayers.controller';
import { Player } from './TeamPlayers.types';
import * as S from './TeamPlayers.styles';

export default function TeamPlayersScreen() {
  const { parsedPlayers } = useTeamPlayersController();

  return (
    <ThemedScrollView>
      <S.Container>
        {parsedPlayers?.map((player: Player) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={player.id}
            // onPress={() => router.push('')}
          >
            <S.PlayerCard key={player.id}>
              <S.ContainerCard>
                <S.PlayerImage
                  source={{
                    uri: player.playerImage,
                  }}
                />
                <S.PlayerInfo>
                  <ThemedText type="bold" style={{ fontSize: 18 }}>
                    {player.fullName}
                  </ThemedText>
                  <ThemedText type="bold" colorText={Colors.gray400}>
                    {player.position}
                  </ThemedText>
                </S.PlayerInfo>
              </S.ContainerCard>
            </S.PlayerCard>
          </TouchableOpacity>
        ))}
      </S.Container>
    </ThemedScrollView>
  );
}

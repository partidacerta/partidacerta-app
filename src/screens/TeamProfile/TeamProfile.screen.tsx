import { ScrollView, View } from 'react-native';

import { router } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';

import { Button } from '@/src/components/Button/Button';
import { LoadingScreen } from '@/src/components/LoadingScreen/LoadingScreen';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Colors } from '@/src/constants/Colors';
import { formatSportsIcon } from '@/src/utils/formatSportsIcon';
import { formatSportsModality } from '@/src/utils/formatSportsModality';

import ModalAcceptInvite from './components/ModalAcceptInvite';
import ModalCancelRequest from './components/ModalCancelRequest';
import ModalDeclineInvite from './components/ModalDeclineInvite';
import ModalLeaveTeam from './components/ModalLeaveTeam';
import { useTeamProfileController } from './TeamProfile.controller';
import * as S from './TeamProfile.styles';

export default function TeamProfileScreen() {
  const {
    teamData,
    isLoading,
    modalType,
    handleOpenModal,
    handleCloseModal,
    mapTeamGender,
    handlePlayerRequestJoin,
  } = useTeamProfileController();

  return (
    <View style={{ flex: 1 }}>
      <S.Container>
        <ScrollView>
          <LoadingScreen isLoading={isLoading} />
          <S.ContainerImage>
            <S.ProfileImage
              source={{
                uri: teamData?.logo,
              }}
            />
            <ThemedText type="title">{teamData?.name}</ThemedText>
          </S.ContainerImage>
          <S.ContainerInfo>
            <S.TeamInfo>
              <S.ContainerSport>
                <S.Sport>
                  {formatSportsIcon(
                    teamData?.basicInfo?.interestSport?.sportType
                  )}
                </S.Sport>
                <S.TextSport>
                  <ThemedText type="bold">
                    {formatSportsModality(
                      teamData?.basicInfo?.interestSport?.sportType,
                      teamData?.basicInfo?.interestSport?.modality
                    )}
                  </ThemedText>
                  <ThemedText type="bold" colorText={Colors.gray400}>
                    {mapTeamGender(teamData?.basicInfo?.teamGender)}
                  </ThemedText>
                </S.TextSport>
              </S.ContainerSport>
              <S.BoxTeam>
                <S.Location>
                  <S.Group>
                    <Ionicons name="location" size={14} color={Colors.white} />
                    <ThemedText type="bold">Localização</ThemedText>
                  </S.Group>
                  <ThemedText type="bold" colorText={Colors.gray400}>
                    {teamData?.basicInfo?.location?.city} -{' '}
                    {teamData?.basicInfo?.location?.uf}
                  </ThemedText>
                </S.Location>
                <S.PlayersActive>
                  <S.Group>
                    <Ionicons name="person" size={14} color={Colors.white} />
                    <ThemedText type="bold">Jogadores</ThemedText>
                  </S.Group>
                  <ThemedText type="bold" colorText={Colors.gray400}>
                    {teamData?.numberOfPlayers} ativos
                  </ThemedText>
                </S.PlayersActive>
              </S.BoxTeam>
            </S.TeamInfo>
          </S.ContainerInfo>
          <S.Stats>
            <ThemedText type="bold" style={{ marginBottom: 2 }}>
              Estatísticas
            </ThemedText>
            <S.ContainerCards>
              <S.CardStats>
                <ThemedText type="bold">Jogos</ThemedText>
                <ThemedText
                  type="bold"
                  style={{ fontSize: 24, marginTop: 10, textAlign: 'center' }}
                >
                  27
                </ThemedText>
              </S.CardStats>
              <S.CardStats>
                <ThemedText type="bold">Vitórias</ThemedText>
                <ThemedText
                  type="bold"
                  colorText={Colors.green}
                  style={{ fontSize: 24, marginTop: 10, textAlign: 'center' }}
                >
                  15
                </ThemedText>
              </S.CardStats>
              <S.CardStats>
                <ThemedText type="bold">Taxa vitória</ThemedText>
                <ThemedText
                  type="bold"
                  colorText={Colors.yellor900}
                  style={{ fontSize: 24, marginTop: 10, textAlign: 'center' }}
                >
                  50%
                </ThemedText>
              </S.CardStats>
            </S.ContainerCards>
          </S.Stats>
          <S.Matches>
            <S.ViewAll>
              <ThemedText type="bold">Próximas partidas</ThemedText>
              <Button type="link" text="Ver todos" textColor={Colors.blue500} />
            </S.ViewAll>
            <S.ContainerCards>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <S.CardMatches></S.CardMatches>
                <S.CardMatches></S.CardMatches>
                <S.CardMatches></S.CardMatches>
              </ScrollView>
            </S.ContainerCards>
          </S.Matches>
          <S.Players>
            <S.ViewAll>
              <ThemedText type="bold">Jogadores</ThemedText>
              <Button
                type="link"
                text="Ver todos"
                textColor={Colors.blue500}
                onPress={() =>
                  router.push({
                    pathname: '/TeamPlayers.stack',
                    params: {
                      players: JSON.stringify(teamData?.members?.players),
                    },
                  })
                }
              />
            </S.ViewAll>
            <S.ContainerPlayers>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {teamData?.members?.players.slice(0, 10).map(player => (
                  <S.ContentPlayer key={player.id}>
                    <S.PlayerItem>
                      <S.PlayerImage
                        source={{
                          uri: player.playerImage,
                        }}
                      />
                      <S.PlayerInfo>
                        <ThemedText type="bold">
                          {player.fullName.split(' ')[0]}
                        </ThemedText>
                      </S.PlayerInfo>
                    </S.PlayerItem>
                  </S.ContentPlayer>
                ))}
              </ScrollView>
            </S.ContainerPlayers>
          </S.Players>
        </ScrollView>
      </S.Container>
      {teamData?.playerLoggedHasBeenInvitedToJoin && (
        <S.ContainerButton>
          <Button
            type="primary"
            text="Recusar"
            colorIcon={Colors.white}
            style={{
              width: 120,
              backgroundColor: Colors.red500,
            }}
            onPress={() => handleOpenModal('declineInvite')}
          />
          <Button
            type="primary"
            text="Aceitar convite"
            style={{
              width: 120,
              backgroundColor: Colors.green900,
            }}
            onPress={() => handleOpenModal('acceptInvite')}
          />
        </S.ContainerButton>
      )}

      {teamData?.playerLoggedHasSentRequestToJoin && (
        <S.ButtonCancelRequest>
          <Button
            type="primary"
            text="Cancelar solicitação"
            style={{
              width: 180,
              backgroundColor: Colors.red500,
            }}
            onPress={() => handleOpenModal('cancelRequest')}
          />
        </S.ButtonCancelRequest>
      )}

      {teamData?.playerLoggedWasInTeam && (
        <S.ButtonLeaveTeam>
          <Button
            type="primary"
            text="Sair do time"
            style={{
              width: 120,
              backgroundColor: Colors.red500,
            }}
            onPress={() => handleOpenModal('LeaveTeam')}
          />
        </S.ButtonLeaveTeam>
      )}

      {!teamData?.playerLoggedHasBeenInvitedToJoin &&
        !teamData?.playerLoggedHasSentRequestToJoin &&
        !teamData?.playerLoggedWasInTeam && (
          <S.Button>
            <Button
              type="primary"
              text="Entrar"
              style={{
                width: 120,
              }}
              onPress={handlePlayerRequestJoin}
            />
          </S.Button>
        )}

      <ModalLeaveTeam
        isVisible={modalType === 'LeaveTeam'}
        onClose={handleCloseModal}
      />

      <ModalCancelRequest
        isVisible={modalType === 'cancelRequest'}
        onClose={handleCloseModal}
      />

      <ModalDeclineInvite
        isVisible={modalType === 'declineInvite'}
        onClose={handleCloseModal}
      />

      <ModalAcceptInvite
        isVisible={modalType === 'acceptInvite'}
        onClose={handleCloseModal}
      />
    </View>
  );
}

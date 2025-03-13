import { ActivityIndicator, FlatList } from 'react-native';

import { Button } from '@/src/components/Button/Button';
import Input from '@/src/components/Input/Input';
import SportsFilter from '@/src/components/SportsFilter/SportsFilter';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Colors } from '@/src/constants/Colors';

import { useListTeamsController } from './ListTeams.controller';
import * as S from './ListTeams.styles';

export default function ListTeamsScreen() {
  const {
    searchTeam,
    setSearchTeam,
    handleSearchTeam,
    isLoading,
    teams,
    formatTeamInfo,
    selectedSport,
    setSelectedSport,
  } = useListTeamsController();

  return (
    <S.Container>
      <S.Search>
        <Input
          placeholder="Pesquise pelo nome do time"
          width={'75%'}
          maxLength={30}
          value={searchTeam}
          onChangeText={setSearchTeam}
        />
        <Button
          text="Buscar"
          borderRadius={'10px'}
          style={{ width: '20%', marginBottom: 26 }}
          onPress={handleSearchTeam}
        />
      </S.Search>

      <SportsFilter
        selectedSport={selectedSport}
        onSelectSport={setSelectedSport}
      />

      <S.ContainerTeams>
        {isLoading ? (
          <ActivityIndicator style={{ marginTop: 30 }} />
        ) : teams?.content?.length === 0 ? (
          <ThemedText style={{ textAlign: 'center', marginTop: 30 }}>
            Nenhum time encontrado
          </ThemedText>
        ) : (
          <FlatList
            data={teams?.content}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ flexGrow: 1 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item: team }) => (
              <S.TeamCard key={team.id}>
                <S.ContainerCard>
                  <S.TeamImage
                    source={{
                      uri: team?.logo,
                    }}
                  />
                  <S.TeamInfo>
                    <ThemedText type="bold" style={{ fontSize: 18 }}>
                      {team?.name}
                    </ThemedText>
                    <S.Box>
                      <ThemedText type="bold" colorText={Colors.gray400}>
                        {formatTeamInfo(team?.sport, team?.modality)}
                      </ThemedText>
                    </S.Box>
                  </S.TeamInfo>
                </S.ContainerCard>
              </S.TeamCard>
            )}
          />
        )}
      </S.ContainerTeams>
    </S.Container>
  );
}

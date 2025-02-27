import { Controller } from 'react-hook-form';
import { TouchableWithoutFeedback, View } from 'react-native';

import Crown from '@/src/assets/svgs/images/crown.svg';
import { Button } from '@/src/components/Button/Button';
import SelectDropdown from '@/src/components/SelectDropdown/SelectDropdown';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Colors } from '@/src/constants/Colors';
import { GENDERTEAM_OPTIONS } from '@/src/constants/GenderTeam';

import ModalInvitePlayers from './components/ModalInvitePlayers';
import ModalPlayerDetails from './components/ModalPlayerDetails';
import { useRegisterTeamInviteController } from './RegisterTeamInvite.controller';
import * as S from './RegisterTeamInvite.styles';

export default function RegisterTeamInviteScreen() {
  const {
    userAuth,
    modalType,
    handleOpenModal,
    handleCloseModal,
    control,
    isValid,
    onSubmitRegisterTeamInvite,
    selectedPlayers,
    handleInvitePlayer,
    handleRemovePlayer,
  } = useRegisterTeamInviteController();

  return (
    <View style={{ flex: 1 }}>
      <ThemedScrollView>
        <S.Container>
          <S.ContainerPresident>
            <ThemedText type="semiBold" style={{ fontSize: 12 }}>
              Presidente
            </ThemedText>
            <S.BoxPresident>
              <S.InfoPresident>
                <S.Image
                  source={{
                    uri: userAuth?.playerInfo?.playerImage,
                  }}
                />
                <S.NamePresident>
                  <ThemedText type="bold" style={{ fontSize: 14 }}>
                    {userAuth?.nickname}
                  </ThemedText>
                  <ThemedText type="semiBold" style={{ fontSize: 12 }}>
                    {userAuth?.name}
                  </ThemedText>
                </S.NamePresident>
              </S.InfoPresident>
              <Crown />
            </S.BoxPresident>
          </S.ContainerPresident>
          <Controller
            name="teamGender"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectDropdown
                data={GENDERTEAM_OPTIONS}
                label="Gênero do time"
                placeholder="Selecione o gênero"
                setSelected={(selected: string) => {
                  const selectedOption = GENDERTEAM_OPTIONS.find(
                    option => option.value === selected
                  );
                  if (selectedOption) {
                    onChange(selectedOption.apiValue);
                  }
                }}
                defaultOption={GENDERTEAM_OPTIONS.find(
                  option => option.apiValue === value
                )}
              />
            )}
          />

          <Button
            text="Convidar para o time"
            onPress={() => handleOpenModal('invite')}
            style={{ backgroundColor: Colors.green900 }}
          />
          <S.ContainerPlayers>
            <ThemedText
              type="semiBold"
              colorText={Colors.gray200}
              style={{ fontSize: 12 }}
            >
              Jogadores: {selectedPlayers.length + 1}
            </ThemedText>

            <S.BoxPlayers>
              <S.LeftSide>
                <S.Position>
                  <ThemedText type="bold" style={{ fontSize: 14 }}>
                    #1
                  </ThemedText>
                </S.Position>
                <S.InfoPresident>
                  <S.ImagePlayer
                    source={{
                      uri: userAuth?.playerInfo?.playerImage,
                    }}
                  />
                  <S.NamePresident>
                    <ThemedText type="bold" style={{ fontSize: 14 }}>
                      {userAuth?.nickname}
                    </ThemedText>
                  </S.NamePresident>
                </S.InfoPresident>
              </S.LeftSide>
              <S.RightSide>
                <Crown />
              </S.RightSide>
            </S.BoxPlayers>

            {selectedPlayers.map((player, index) => (
              <TouchableWithoutFeedback
                key={player.id}
                onLongPress={() => handleOpenModal('details')}
              >
                <S.BoxPlayers>
                  <S.LeftSide>
                    <S.Position>
                      <ThemedText type="bold" style={{ fontSize: 14 }}>
                        #{index + 2}{' '}
                      </ThemedText>
                    </S.Position>
                    <S.InfoPresident>
                      <S.ImagePlayer
                        source={{
                          uri: player?.playerImage,
                        }}
                      />
                      <S.NamePresident>
                        <ThemedText type="bold" style={{ fontSize: 14 }}>
                          {player.nickname}
                        </ThemedText>
                      </S.NamePresident>
                    </S.InfoPresident>
                  </S.LeftSide>
                </S.BoxPlayers>
              </TouchableWithoutFeedback>
            ))}
          </S.ContainerPlayers>

          <ModalInvitePlayers
            isVisible={modalType === 'invite'}
            onClose={handleCloseModal}
            onInvitePlayer={handleInvitePlayer}
            onRemovePlayer={handleRemovePlayer}
          />

          <ModalPlayerDetails
            isVisible={modalType === 'details'}
            onClose={handleCloseModal}
          />
        </S.Container>
      </ThemedScrollView>
      <S.Button>
        <Button
          type="primary"
          icon="chevron-forward"
          sizeIcon={24}
          colorIcon={Colors.white}
          onPress={onSubmitRegisterTeamInvite}
          disabled={!isValid}
          style={{
            width: 46,
            height: 46,
          }}
        />
      </S.Button>
    </View>
  );
}

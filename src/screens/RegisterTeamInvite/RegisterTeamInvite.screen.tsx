import { Controller } from 'react-hook-form';

import { Button } from '@/src/components/Button/Button';
import SelectDropdown from '@/src/components/SelectDropdown/SelectDropdown';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { Colors } from '@/src/constants/Colors';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { GENDERTEAM_OPTIONS } from '@/src/constants/GenderTeam';

import Crown from '@/src/assets/svgs/images/crown.svg';

import * as S from './RegisterTeamInvite.styles';
import { useRegisterTeamController } from './RegisterTeamInvite.controller';

export default function RegisterTeamInviteScreen() {
  const { userAuth, errors, control, isValid, onSubmitRegisterTeamInvite } =
    useRegisterTeamController();

  return (
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
          name="genderTeam"
          control={control}
          render={({ field: { value, onChange } }) => (
            <SelectDropdown
              data={GENDERTEAM_OPTIONS}
              label="Gênero do time"
              placeholder="Selecione o gênero"
              setSelected={onChange}
              defaultOption={GENDERTEAM_OPTIONS.find(
                option => option.key === value
              )}
            />
          )}
        />
        <Button
          text="Convidar para o time"
          icon="add"
          style={{ backgroundColor: Colors.green900 }}
        />
        <S.ContainerPlayers>
          <ThemedText
            type="semiBold"
            colorText={Colors.gray200}
            style={{ fontSize: 12 }}
          >
            Jogadores: 1
          </ThemedText>
          <S.BoxPlayers>
            <S.LeftSide>
              <S.Position>
                <ThemedText type="bold" style={{ fontSize: 14 }}>
                  #1
                </ThemedText>
              </S.Position>
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
                </S.NamePresident>
              </S.InfoPresident>
            </S.LeftSide>
            <S.RightSide>
              <Crown />
            </S.RightSide>
          </S.BoxPlayers>
        </S.ContainerPlayers>
        {/* <Button
          type="primary"
          icon="chevron-forward"
          sizeIcon={24}
          colorIcon={Colors.white}
          onPress={onSubmitRegisterTeamInvite}
          disabled={!isValid}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 20,
            width: 46,
            height: 46,
          }}
        /> */}
      </S.Container>
    </ThemedScrollView>
  );
}

import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { Button } from '@/src/components/Button/Button';
import { LoadingScreen } from '@/src/components/LoadingScreen/LoadingScreen';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Colors } from '@/src/constants/Colors';

import { useUserProfileController } from './UserProfile.controller';
import * as S from './UserProfile.styles';

export default function UserProfileScreen() {
  const { playerData, isLoading, handleNavigateEditProfile } =
    useUserProfileController();

  return (
    <S.Container>
      <LoadingScreen isLoading={isLoading} />
      <LinearGradient
        colors={[Colors.blueOpacity50, Colors.darkBlueOpacity50]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ borderRadius: 28, overflow: 'hidden' }}
      >
        <S.Header>
          <S.ButtonSettings>
            <Button
              type="secondary"
              icon="settings-sharp"
              sizeIcon={22}
              colorIcon={Colors.blue}
              style={{ width: 32, height: 32, backgroundColor: Colors.white }}
            />
          </S.ButtonSettings>
          <S.Profile>
            <S.ProfileImage source={{ uri: playerData?.playerImage }} />
            <S.BoxProfile>
              <S.BoxText>
                <ThemedText type="title">{playerData?.fullName}</ThemedText>
                <ThemedText style={{ fontSize: 16 }}>
                  {playerData?.nickname}
                </ThemedText>
              </S.BoxText>
              <Button
                type="secondary"
                text="Editar perfil"
                icon="pencil"
                sizeIcon={16}
                onPress={handleNavigateEditProfile}
                style={{ width: 114, height: 34 }}
              />
            </S.BoxProfile>
          </S.Profile>
        </S.Header>
      </LinearGradient>
      {/* <S.PlayerInformation>
        <S.Box></S.Box>
        <S.Box></S.Box>
        <S.Box></S.Box>
      </S.PlayerInformation> */}
    </S.Container>
  );
}

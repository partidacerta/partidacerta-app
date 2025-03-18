import { useEffect, useState } from 'react';

import { useLocalSearchParams } from 'expo-router';

import useAuthStore from '@/src/store/auth/auth.store';
import useTeamStore from '@/src/store/team/team.store';

import { IUseTeamProfileControllerProps } from './TeamProfile.types';

export const useTeamProfileController = (): IUseTeamProfileControllerProps => {
  const { id } = useLocalSearchParams();
  const { userAuth } = useAuthStore();
  const {
    teamData,
    getTeamById,
    isLoading,
    playerRequestJoin,
    playerRequestCancel,
    leaveTeam,
    declineTeamInvite,
    acceptPlayerInTeam,
  } = useTeamStore();

  const [modalType, setModalType] = useState<
    'logout' | 'cancel' | 'refuse' | 'accept' | null
  >(null);

  const handleOpenModal = (type: 'logout' | 'cancel' | 'refuse' | 'accept') => {
    setModalType(type);
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  const mapTeamGender = (gender: string | undefined) => {
    switch (gender) {
      case 'MALE':
        return 'Masculino';
      case 'FEMALE':
        return 'Feminino';
      case 'MIXED':
        return 'Misto';
    }
  };

  const handleManageTeamPlayers = (
    action: (teamId: string, playerId: string) => void
  ) => {
    const teamId = String(id);
    const playerId = userAuth?.playerInfo?.id;

    if (teamId && playerId) {
      action(teamId, playerId);
    }
  };

  useEffect(() => {
    if (id && typeof id === 'string') {
      getTeamById(id);
    }
  }, [id, getTeamById]);

  return {
    teamData,
    isLoading,
    modalType,
    handleOpenModal,
    handleCloseModal,
    mapTeamGender,
    handlePlayerRequestJoin: () => handleManageTeamPlayers(playerRequestJoin),
    handlePlayerRequestCancel: () =>
      handleManageTeamPlayers(playerRequestCancel),
    handleLeaveTeam: () => handleManageTeamPlayers(leaveTeam),
    handleDeclineTeamInvite: () => handleManageTeamPlayers(declineTeamInvite),
    handleAcceptPlayerInTeam: () => handleManageTeamPlayers(acceptPlayerInTeam),
  };
};

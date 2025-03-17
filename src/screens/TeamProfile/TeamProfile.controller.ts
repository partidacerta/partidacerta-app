import { useEffect } from 'react';

import { useLocalSearchParams } from 'expo-router';

import useTeamStore from '@/src/store/team/team.store';

import { IUseTeamProfileControllerProps } from './TeamProfile.types';

export const useTeamProfileController = (): IUseTeamProfileControllerProps => {
  const { teamData, getTeamById, isLoading } = useTeamStore();
  const { id } = useLocalSearchParams();

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

  useEffect(() => {
    if (id && typeof id === 'string') {
      getTeamById(id);
    }
  }, [id, getTeamById]);

  return { teamData, isLoading, mapTeamGender };
};

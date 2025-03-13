import { useEffect, useState } from 'react';

import useTeamStore from '@/src/store/team/team.store';

import { IUseListTeamsControllerProps } from './ListTeams.types';

export const useListTeamsController = (): IUseListTeamsControllerProps => {
  const { teams, isLoading, getTeams } = useTeamStore();
  const [searchTeam, setSearchTeam] = useState('');
  const [selectedSport, setSelectedSport] = useState<string | null>(null);

  const sportTranslations: Record<string, string> = {
    VOLLEYBALL: 'Vôlei',
    BASKETBALL: 'Basketball',
    SOCCER: 'Futebol',
    PADEL: 'Padel',
    TENNIS: 'Tennis',
  };

  const modalityTranslations: Record<string, string> = {
    FUTSAL: 'Futsal',
    FOOTBALL_SOCIETY: 'Society',
    INDOOR_VOLLEYBALL: 'Vôlei de Quadra',
    BEACH_VOLLEYBALL: 'Vôlei de Praia',
    FOOTVOLLEY: 'Futevôlei',
    BASKETBALL_3X3: 'Basquete 3x3',
    BASKETBALL_5X5: 'Basquete 5x5',
    TABLE_TENNIS: 'Tênis de Mesa',
    BEACH_TENNIS: 'Beach Tênis',
  };

  const handleSearchTeam = async () => {
    await getTeams(searchTeam, undefined, selectedSport || undefined);
  };

  const formatTeamInfo = (
    sport: string | undefined,
    modality: string | undefined
  ): string => {
    const translatedSport = sportTranslations[sport || ''] || sport;

    if (sport === 'PADEL' && modality === 'NOT_INFORMED') {
      return translatedSport || '';
    }

    const translatedModality = modalityTranslations[modality || ''] || modality;
    return `${translatedSport} - ${translatedModality}` || '';
  };

  useEffect(() => {
    getTeams(searchTeam, undefined, selectedSport || undefined);
  }, [selectedSport, getTeams]);

  return {
    searchTeam,
    setSearchTeam,
    handleSearchTeam,
    isLoading,
    teams,
    formatTeamInfo,
    selectedSport,
    setSelectedSport,
  };
};

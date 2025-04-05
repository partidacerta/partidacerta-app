import { useEffect, useState } from 'react';

import useTeamStore from '@/src/store/team/team.store';

import { IUseListTeamsControllerProps } from './ListTeams.types';

export const useListTeamsController = (): IUseListTeamsControllerProps => {
  const { teams, isLoading, getTeams } = useTeamStore();
  const [searchTeam, setSearchTeam] = useState('');
  const [selectedSport, setSelectedSport] = useState<string | null>(null);

  const handleSearchTeam = async () => {
    await getTeams(searchTeam, undefined, selectedSport || undefined);
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
    selectedSport,
    setSelectedSport,
  };
};

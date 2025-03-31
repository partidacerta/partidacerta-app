import { useLocalSearchParams } from 'expo-router';

import { IUseTeamPlayersControllerProps } from './TeamPlayers.types';

export const useTeamPlayersController = (): IUseTeamPlayersControllerProps => {
  const { players } = useLocalSearchParams();
  const parsedPlayers =
    typeof players === 'string' ? JSON.parse(players) : players;

  return { parsedPlayers };
};

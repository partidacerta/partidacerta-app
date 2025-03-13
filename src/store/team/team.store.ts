import { router } from 'expo-router';
import { create } from 'zustand';

import { showMessageSuccess } from '@/src/helpers/showMessage';
import { triggerError } from '@/src/helpers/triggerError';
import {
  getTeamsRequest,
  postTeamRegisterRequest,
} from '@/src/services/team/team.request';

import {
  FailedRequestGetTeams,
  FailedRequestTeamRegister,
  SuccessRequestCreateTeam,
} from './team.message';
import { TeamDataProps, TeamStoreProps } from './team.types';

const initialState = {
  teamData: {},
  teams: undefined,
  isLoading: false,
};

const useTeamStore = create<TeamStoreProps>((set, get) => ({
  ...initialState,

  selectedPlayers: [],

  addPlayer: player =>
    set(state => ({
      selectedPlayers: state.selectedPlayers.some(p => p.id === player.id)
        ? state.selectedPlayers
        : [...state.selectedPlayers, player],
    })),

  removePlayer: playerId =>
    set(state => ({
      selectedPlayers: state.selectedPlayers.filter(p => p.id !== playerId),
    })),

  RegisterTeam: async () => {
    const { makeAsync, teamData } = get();
    const handle = async (): Promise<void> => {
      set({ isLoading: true });

      const data = await postTeamRegisterRequest({
        logo: teamData.logo,
        name: teamData.name,
        interestSport: teamData.interestSport,
        location: teamData.location,
        teamGender: teamData.teamGender,
        manager: teamData.manager,
        players: teamData.players || [],
        contact: teamData.contact,
        description: teamData.description,
      });

      if (data) {
        set({
          teamData: data,
        });
      }

      showMessageSuccess(SuccessRequestCreateTeam.message);

      router.push('/(home)');

      set({ isLoading: false });
    };

    const onError = (): void => {
      return triggerError(FailedRequestTeamRegister.message);
    };

    void makeAsync({ handle, onError });
  },

  setTeamData: ({
    logo,
    name,
    interestSport,
    location,
    teamGender,
    manager,
    players,
    contact,
    description,
  }: TeamDataProps) => {
    set(state => ({
      teamData: {
        ...state.teamData,
        ...(logo !== undefined && { logo }),
        ...(name !== undefined && { name }),
        ...(interestSport !== undefined && { interestSport }),
        ...(location !== undefined && { location }),
        ...(teamGender !== undefined && { teamGender }),
        ...(manager !== undefined && { manager }),
        ...(players !== undefined && { players }),
        ...(contact !== undefined && { contact }),
        ...(description !== undefined && { description }),
      },
    }));
  },

  getTeams: async (name?: string, location?: string, sport?: string) => {
    const { makeAsync } = get();
    const handle = async (): Promise<void> => {
      set({ isLoading: true });
      try {
        const data = await getTeamsRequest({ name, sport });
        set({ teams: data });
      } catch (error) {
        triggerError(FailedRequestGetTeams.message);
      } finally {
        set({ isLoading: false });
      }
    };

    void makeAsync({ handle });
  },

  makeAsync: async ({ handle, onError, onFinally }) => {
    try {
      await handle();
    } catch (error) {
      if (onError != null) {
        return onError(error);
      }
    } finally {
      if (onFinally != null) onFinally();
      set({ isLoading: false });
    }
  },
}));

export default useTeamStore;

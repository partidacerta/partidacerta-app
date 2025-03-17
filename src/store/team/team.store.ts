import { router } from 'expo-router';
import { create } from 'zustand';

import { showMessageSuccess } from '@/src/helpers/showMessage';
import { triggerError } from '@/src/helpers/triggerError';
import {
  getTeamByIdRequest,
  getTeamsRequest,
  postTeamRegisterRequest,
} from '@/src/services/team/team.request';

import {
  FailedRequestGetTeam,
  FailedRequestGetTeams,
  FailedRequestTeamRegister,
  SuccessRequestCreateTeam,
} from './team.message';
import { TeamDataProps, TeamStoreProps } from './team.types';

const initialState = {
  teamDataCreated: {},
  teams: undefined,
  teamData: undefined,
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
    const { makeAsync, teamDataCreated } = get();
    const handle = async (): Promise<void> => {
      set({ isLoading: true });

      const data = await postTeamRegisterRequest({
        logo: teamDataCreated.logo,
        name: teamDataCreated.name,
        interestSport: teamDataCreated.interestSport,
        location: teamDataCreated.location,
        teamGender: teamDataCreated.teamGender,
        manager: teamDataCreated.manager,
        players: teamDataCreated.players || [],
        contact: teamDataCreated.contact,
        description: teamDataCreated.description,
      });

      if (data) {
        set({
          teamDataCreated: data,
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
      teamDataCreated: {
        ...state.teamDataCreated,
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

  getTeamById: async (teamId: string) => {
    const { makeAsync } = get();
    const handle = async (): Promise<void> => {
      set({ isLoading: true });

      const data = await getTeamByIdRequest({ teamId });

      if (data) {
        set({ teamData: data });
      }

      set({ isLoading: false });
    };

    const onError = (): void => {
      triggerError(FailedRequestGetTeam.message);
    };

    void makeAsync({ handle, onError });
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

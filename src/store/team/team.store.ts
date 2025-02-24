import { router } from 'expo-router';
import { create } from 'zustand';

import { triggerError } from '@/src/helpers/triggerError';
import { postTeamRegisterRequest } from '@/src/services/team/team.request';

import { FailedRequestTeamRegister } from './team.message';
import { TeamDataProps, TeamStoreProps } from './team.types';

const initialState = {
  teamData: {},
  isLoading: false,
};

const useTeamStore = create<TeamStoreProps>((set, get) => ({
  ...initialState,

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
      });

      if (data) {
        set({
          teamData: data,
        });
      }

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
  }: TeamDataProps) => {
    set(state => ({
      teamData: {
        ...state.teamData,
        ...(logo !== undefined && { logo }),
        ...(name !== undefined && { name }),
        ...(interestSport !== undefined && { interestSport }),
        ...(location !== undefined && { location }),
        ...(teamGender !== undefined && { teamGender }),
      },
    }));
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

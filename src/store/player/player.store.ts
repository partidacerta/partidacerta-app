import { create } from 'zustand';
import { getPlayerByIdRequest } from '@/src/services/player/player.request';
import { triggerError } from '../../helpers/triggerError';
import { FailedRequestGetPlayer } from './player.message';
import { PlayerStoreProps } from './player.types';

const initialState = {
  playerData: undefined,
  isLoading: false,
};

const usePlayerStore = create<PlayerStoreProps>((set, get) => ({
  ...initialState,

  getPlayerById: async (playerId: string) => {
    const { makeAsync } = get();
    const handle = async (): Promise<void> => {
      set({ isLoading: true });
      const data = await getPlayerByIdRequest({ playerId });
      if (data) {
        set({ playerData: data });
      }
      set({ isLoading: false });
    };

    const onError = (): void => {
      triggerError(FailedRequestGetPlayer.message);
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

export default usePlayerStore;

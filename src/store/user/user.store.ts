import { router } from 'expo-router';
import { create } from 'zustand';

import {
  deleteUserAccountRequest,
  getUserByIdRequest,
} from '@/src/services/user/user.request';

import { triggerError } from '../../helpers/triggerError';
import { FailedRequestDeleteUser, FailedRequestGetUser } from './user.message';
import { UserStoreProps } from './user.types';

const initialState = {
  userData: undefined,
  isLoading: false,
  isAccountDeactivated: false,
};

const useUserStore = create<UserStoreProps>((set, get) => ({
  ...initialState,

  getUserById: async (userId: string) => {
    const { makeAsync } = get();
    const handle = async (): Promise<void> => {
      set({ isLoading: true });
      const data = await getUserByIdRequest({ userId });
      if (data) {
        set({ userData: data });
      }
      set({ isLoading: false });
    };

    const onError = (): void => {
      triggerError(FailedRequestGetUser.message);
    };

    void makeAsync({ handle, onError });
  },

  deleteUserAccount: async (userId: string) => {
    const { makeAsync } = get();
    const handle = async (): Promise<void> => {
      set({ isLoading: true });
      await deleteUserAccountRequest({ userId });
      set({ isAccountDeactivated: true });

      router.push('/Login.stack');
    };

    const onError = (): void => {
      triggerError(FailedRequestDeleteUser.message);
    };

    const onFinally = (): void => {
      set({ isLoading: false });
    };

    void makeAsync({ handle, onError, onFinally });
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

export default useUserStore;

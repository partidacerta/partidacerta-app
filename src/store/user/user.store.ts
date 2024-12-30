import { router } from 'expo-router';
import { create } from 'zustand';

import {
  deleteUserAccountRequest,
  getUserByIdRequest,
  updateUserByIdRequest,
} from '@/src/services/user/user.request';
import { IUserDTO } from '@/src/services/user/user.dto';
import { showMessageSuccess } from '@/src/helpers/showMessage';

import { triggerError } from '../../helpers/triggerError';
import {
  FailedRequestDeleteUser,
  FailedRequestUpdateUser,
  FailedRequestGetUser,
  SuccessRequestUpdateUser,
} from './user.message';
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

  updateUser: async (userId: string, userData: Partial<IUserDTO>) => {
    const { makeAsync } = get();
    const handle = async (): Promise<void> => {
      set({ isLoading: true });
      try {
        const updatedData = await updateUserByIdRequest({ userId, userData });
        set({ userData: updatedData });

        showMessageSuccess(SuccessRequestUpdateUser.message);
      } catch (error) {
        triggerError(FailedRequestUpdateUser.message);
      } finally {
        set({ isLoading: false });
      }
    };

    const onError = (): void => {
      triggerError(FailedRequestUpdateUser.message);
    };

    const onFinally = (): void => {
      set({ isLoading: false });
    };

    void makeAsync({ handle, onError, onFinally });
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

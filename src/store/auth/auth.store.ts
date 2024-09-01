import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { postAuthRequest } from '@/src/services/auth/auth.request';

import { triggerError } from '../../helpers/triggerError';
import { injectZustandInstance } from '../../utils/injectZustandInstance';
import { FailedRequestLogin } from './auth.message';
import { AuthStoreProps, LoginProps } from './auth.types';

const initialState = {
  accessToken: '',
  isLoading: false,
  count: 0,
};

const useAuthStore = create(
  persist<AuthStoreProps>(
    (set, get) => ({
      ...initialState,

      count: 0,
      increment: () => set(state => ({ count: state.count + 1 })),
      decrement: () => set(state => ({ count: state.count - 1 })),

      login: async ({ email, password }: LoginProps) => {
        const { makeAsync } = get();
        const handle = async (): Promise<void> => {
          set({ isLoading: true });

          const token = await postAuthRequest({ email, password });

          set({ isLoading: false });

          if (token) {
            set({
              accessToken: token,
            });
          }
        };

        const onError = (): void => {
          return triggerError(FailedRequestLogin.message);
        };

        void makeAsync({ handle, onError });
      },

      logout: () => {
        set({
          accessToken: '',
        });
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
    }),
    {
      name: 'storage-partidacerta-app',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

injectZustandInstance(useAuthStore);

export default useAuthStore;

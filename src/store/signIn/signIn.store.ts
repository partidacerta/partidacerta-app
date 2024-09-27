import { create } from 'zustand';

import { postSignInRequest } from '@/src/services/signIn/signIn.request';

import { triggerError } from '../../helpers/triggerError';
import { injectZustandInstance } from '../../utils/injectZustandInstance';
import { FailedRequestSignIn } from './signIn.message';
import { SignInStoreProps, SignInProps } from './signIn.types';

const initialState = {
  userDataSignIn: {},
  isLoading: false,
};

const useSignInStore = create<SignInStoreProps>((set, get) => ({
  ...initialState,

  setUserDataSignIn: ({
    name,
    nickname,
    email,
    password,
    isAcceptedPrivacyPolicies,
    sports,
  }: SignInProps) => {
    set(state => ({
      userDataSignIn: {
        ...state.userDataSignIn,
        ...(name !== undefined && { name }),
        ...(nickname !== undefined && { nickname }),
        ...(email !== undefined && { email }),
        ...(password !== undefined && { password }),
        ...(isAcceptedPrivacyPolicies !== undefined && {
          isAcceptedPrivacyPolicies,
        }),
        ...(sports !== undefined && { sports }),
      },
    }));
  },

  signIn: async () => {
    const { makeAsync } = get();
    const handle = async (): Promise<void> => {
      set({ isLoading: true });

      // await postSignInRequest({ userDataSignIn });

      set({ isLoading: false });
    };

    const onError = (): void => {
      return triggerError(FailedRequestSignIn.message);
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

injectZustandInstance(useSignInStore);

export default useSignInStore;

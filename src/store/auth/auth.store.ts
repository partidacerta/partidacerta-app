import { router } from 'expo-router';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { showMessageSuccess } from '@/src/helpers/showMessage';
import {
  getVerifyEmailRequest,
  getVerifyNicknameRequest,
  postAuthLoginRequest,
  postAuthRegisterRequest,
  postResetPasswordFinalStepRequest,
  postResetPasswordRequest,
} from '@/src/services/auth/auth.request';

import { triggerError } from '../../helpers/triggerError';
import { injectZustandInstance } from '../../utils/injectZustandInstance';
import {
  FailedRequestAuthLogin,
  FailedRequestAuthRegister,
  FailedRequestResetCodeFinalStep,
  FailedRequestResetPassword,
  FailedRequestResetPasswordFinalStep,
  FailedRequestVerifyEmail,
  FailedRequestVerifyNickname,
  SuccessRequestResetPassword,
  SuccessRequestResetPasswordFinalStep,
} from './auth.message';
import { AuthStoreProps, LoginProps, SignInProps } from './auth.types';

const initialState = {
  userAuth: undefined,
  accessToken: '',
  isLoading: false,
  userDataSignIn: {},
  resetPasswordData: {},
  isEmailRegistered: false,
  isNicknameRegistered: false,
};

const useAuthStore = create(
  persist<AuthStoreProps>(
    (set, get) => ({
      ...initialState,

      authLogin: async ({ email, password }: LoginProps) => {
        const { makeAsync } = get();
        const handle = async (): Promise<void> => {
          set({ isLoading: true });

          const data = await postAuthLoginRequest({ email, password });

          if (data) {
            const { token, ...userAuthData } = data;

            set({
              accessToken: token,
              userAuth: userAuthData,
            });
          }

          set({ isLoading: false });
        };

        const onError = (): void => {
          return triggerError(FailedRequestAuthLogin.message);
        };

        void makeAsync({ handle, onError });
      },

      authRegister: async () => {
        const { makeAsync, userDataSignIn } = get();
        const handle = async (): Promise<void> => {
          set({ isLoading: true });

          const data = await postAuthRegisterRequest({
            name: userDataSignIn.name,
            nickname: userDataSignIn.nickname,
            email: userDataSignIn.email,
            password: userDataSignIn.password,
            acceptsTerms: userDataSignIn.isAcceptedPrivacyPolicies,
            role: 'PLAYER',
          });

          if (data) {
            set({
              userAuth: data,
            });
          }

          router.push('/(home)');

          set({ isLoading: false });
        };

        const onError = (): void => {
          return triggerError(FailedRequestAuthRegister.message);
        };

        void makeAsync({ handle, onError });
      },

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

      verifyEmail: async ({ email }: { email: string }) => {
        const { makeAsync } = get();
        const handle = async (): Promise<void> => {
          const data = await getVerifyEmailRequest({
            email: email,
          });

          set({ isEmailRegistered: data });
        };

        const onError = (): void => {
          return triggerError(FailedRequestVerifyEmail.message);
        };

        void makeAsync({ handle, onError });
      },

      verifyNickname: async ({ nickname }: { nickname: string }) => {
        const { makeAsync } = get();
        const handle = async (): Promise<void> => {
          const data = await getVerifyNicknameRequest({
            nickname: nickname,
          });

          set({ isNicknameRegistered: data });
        };

        const onError = (): void => {
          return triggerError(FailedRequestVerifyNickname.message);
        };

        void makeAsync({ handle, onError });
      },

      resetPassword: async ({
        email,
        isResendCode = false,
      }: {
        email: string;
        isResendCode?: boolean;
      }) => {
        const { makeAsync } = get();

        const handle = async (): Promise<void> => {
          set({ isLoading: true });

          try {
            await postResetPasswordRequest({ email });

            set(state => ({
              resetPasswordData: {
                ...state.resetPasswordData,
                email,
              },
            }));

            !isResendCode && router.push('./VerifyCode.stack');
            showMessageSuccess(SuccessRequestResetPassword.message);

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            if (error.response?.status === 404) {
              triggerError(FailedRequestResetPassword.message);
            } else {
              onError();
            }
          }

          set({ isLoading: false });
        };

        const onError = (): void => {
          return triggerError(FailedRequestResetPassword.message);
        };

        void makeAsync({ handle, onError });
      },

      resetPasswordFinalStep: async ({
        newPassword,
      }: {
        newPassword: string;
      }) => {
        const { makeAsync, resetPasswordData } = get();

        const handle = async (): Promise<void> => {
          set({ isLoading: true });

          try {
            await postResetPasswordFinalStepRequest({
              email: resetPasswordData.email,
              resetCode: resetPasswordData.resetCode,
              newPassword,
            });

            showMessageSuccess(SuccessRequestResetPasswordFinalStep.message);

            router.push('/Login.stack');

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            if (error.response.status === 400) {
              triggerError(FailedRequestResetCodeFinalStep.message);
            } else {
              onError();
            }
          }

          set({ isLoading: false });
        };

        const onError = (): void => {
          return triggerError(FailedRequestResetPasswordFinalStep.message);
        };

        void makeAsync({ handle, onError });
      },

      setCodeResetPassword: ({ resetCode }: { resetCode: string }) => {
        set(state => ({
          resetPasswordData: {
            ...state.resetPasswordData,
            resetCode,
          },
        }));
      },

      setCleanVerifyEmailNickname: () => {
        set({
          isEmailRegistered: false,
          isNicknameRegistered: false,
        });
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

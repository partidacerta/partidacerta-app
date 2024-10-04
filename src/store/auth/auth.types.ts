import { IUserAuthMeDTO } from '@/src/services/auth/auth.dto';

export type AuthStoreProps = {
  userAuth?: IUserAuthMeDTO;
  accessToken: string;
  isLoading: boolean;
  isEmailRegistered: boolean;
  isNicknameRegistered: boolean;
  setCleanVerifyEmailNickname: () => void;
  verifyEmail: ({ email }: { email: string }) => void;
  verifyNickname: ({ nickname }: { nickname: string }) => void;
  userDataSignIn: SignInProps;
  resetPassword: ({ email }: { email: string }) => void;
  setUserDataSignIn: ({
    name,
    nickname,
    email,
    password,
    isAcceptedPrivacyPolicies,
    sports,
  }: SignInProps) => void;
  authRegister: () => void;
  authLogin: ({ email, password }: LoginProps) => void;
  logout: () => void;
  makeAsync: <T>(props: {
    handle: () => Promise<T>;
    onError?: (error: unknown) => void;
    onFinally?: () => void;
  }) => Promise<void>;
};

export interface LoginProps {
  email: string;
  password: string;
}

export interface SignInProps {
  name?: string;
  nickname?: string;
  email?: string;
  password?: string;
  isAcceptedPrivacyPolicies?: boolean;
  sports?: string[];
}

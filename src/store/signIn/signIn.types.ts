export type SignInStoreProps = {
  userDataSignIn: SignInProps;
  isLoading: boolean;
  setUserDataSignIn: ({
    name,
    nickname,
    email,
    password,
    isAcceptedPrivacyPolicies,
    sports,
  }: SignInProps) => void;
  signIn: () => void;
  makeAsync: <T>(props: {
    handle: () => Promise<T>;
    onError?: (error: unknown) => void;
    onFinally?: () => void;
  }) => Promise<void>;
};

export interface SignInProps {
  name?: string;
  nickname?: string;
  email?: string;
  password?: string;
  isAcceptedPrivacyPolicies?: boolean;
  sports?: string[];
}

export type AuthStoreProps = {
  accessToken: string;
  isLoading: boolean;
  count: number;
  increment: () => void;
  decrement: () => void;
  login: ({ email, password }: LoginProps) => void;
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

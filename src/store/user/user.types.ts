export type UserStoreProps = {
  isLoading: boolean;
  isAccountDeactivated: boolean;
  deleteUserAccount: (userId: string) => void;
  makeAsync: <T>(props: {
    handle: () => Promise<T>;
    onError?: (error: unknown) => void;
    onFinally?: () => void;
  }) => Promise<void>;
};

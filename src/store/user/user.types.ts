import { IUserDTO } from '@/src/services/user/user.dto';

export type UserStoreProps = {
  userData?: IUserDTO;
  isLoading: boolean;
  getUserById: (userId: string) => void;
  isAccountDeactivated: boolean;
  deleteUserAccount: (userId: string) => void;
  makeAsync: <T>(props: {
    handle: () => Promise<T>;
    onError?: (error: unknown) => void;
    onFinally?: () => void;
  }) => Promise<void>;
};

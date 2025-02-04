import { IUserDTO } from '@/src/services/user/user.dto';

export type UserStoreProps = {
  userData?: IUserDTO;
  isLoading: boolean;
  getUserById: (userId: string) => void;
  updateUser: (userId: string, userData: Partial<IUserDTO>) => Promise<void>;
  isAccountDeactivated: boolean;
  deleteUserAccount: (userId: string, password: string) => void;
  makeAsync: <T>(props: {
    handle: () => Promise<T>;
    onError?: (error: unknown) => void;
    onFinally?: () => void;
  }) => Promise<void>;
};

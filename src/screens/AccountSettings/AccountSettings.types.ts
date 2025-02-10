import { IUserDTO } from '@/src/services/user/user.dto';

import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface IUseAccountSettingsProps {
  userData: IUserDTO | undefined;
  handleSubmit: UseFormHandleSubmit<FormRequiredEditAccount>;
  onSubmitEditUser: (data: FormRequiredEditAccount) => void;
  control: Control<FormRequiredEditAccount>;
  errors: FieldErrors<FormRequiredEditAccount>;
  isLoading: boolean;
  shouldDisabledButton: boolean;
}

export interface FormRequiredEditAccount {
  name: string;
  nickname: string;
  email: string;
  birthdate: string;
  phone: string;
  uf: string;
  city: string;
}

import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface IUseRegisterUserInfoControllerProps {
  onSubmitRegisterUserInfo: () => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FormRequiredRegisterUserInfo>;
  control: Control<FormRequiredRegisterUserInfo>;
  errors: FieldErrors<FormRequiredRegisterUserInfo>;
  shouldDisabledButton: boolean;
  isNicknameRegistered: boolean;
  isLoading: boolean;
}

export interface FormRequiredRegisterUserInfo {
  name: string;
  nickname: string;
}

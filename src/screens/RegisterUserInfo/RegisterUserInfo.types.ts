import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface IUseRegisterUserInfoControllerProps {
  onSubmitRegisterUserInfo: () => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FormRequiredRegisterUserInfo>;
  control: Control<FormRequiredRegisterUserInfo>;
  errors: FieldErrors<FormRequiredRegisterUserInfo>;
  isValid: boolean;
}

export interface FormRequiredRegisterUserInfo {
  name: string;
  nickname: string;
}

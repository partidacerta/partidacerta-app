import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface IUseRegisterUserControllerProps {
  onSubmitRegisterUser: () => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FormRequiredRegisterUser>;
  control: Control<FormRequiredRegisterUser>;
  errors: FieldErrors<FormRequiredRegisterUser>;
  isValid: boolean;
  isVisiblePassword: boolean;
  handleShowPassword: () => void;
}

export interface FormRequiredRegisterUser {
  email: string;
  password: string;
  confirmPassword: string;
}

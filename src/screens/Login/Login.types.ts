import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface IUseLoginControllerProps {
  onSubmitLogin: () => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FormRequiredLogin>;
  control: Control<FormRequiredLogin>;
  errors: FieldErrors<FormRequiredLogin>;
  isValid: boolean;
  isVisiblePassword: boolean;
  handleShowPassword: () => void;
}

export interface FormRequiredLogin {
  email: string;
  password: string;
}

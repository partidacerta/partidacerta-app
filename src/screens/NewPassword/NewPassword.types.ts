import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface IUseNewPasswordControllerProps {
  onSubmitNewPassword: () => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FormRequiredNewPassword>;
  control: Control<FormRequiredNewPassword>;
  errors: FieldErrors<FormRequiredNewPassword>;
  isValid: boolean;
  isVisiblePassword: boolean;
  isVisibleConfirmPassword: boolean;
  handleShowPassword: () => void;
  handleShowConfirmPassword: () => void;
}

export interface FormRequiredNewPassword {
  password: string;
  confirmPassword: string;
}

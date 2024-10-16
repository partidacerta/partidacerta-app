import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface IUseNewPasswordControllerProps {
  onSubmitNewPassword: () => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FormRequiredNewPassword>;
  control: Control<FormRequiredNewPassword>;
  errors: FieldErrors<FormRequiredNewPassword>;
  handleFormIsValid: () => boolean;
  isVisiblePassword: boolean;
  isVisibleConfirmPassword: boolean;
  handleShowPassword: () => void;
  handleShowConfirmPassword: () => void;
  dataValidateCharacteres: DataValidateCharacteres[];
  watchPassword: string;
  isLoading: boolean;
}

export interface FormRequiredNewPassword {
  password: string;
  confirmPassword: string;
}

interface DataValidateCharacteres {
  type: string;
  label: string;
}

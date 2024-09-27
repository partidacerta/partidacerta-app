import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface IUseRegisterUserControllerProps {
  onSubmitRegisterUser: () => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FormRequiredRegisterUser>;
  control: Control<FormRequiredRegisterUser>;
  errors: FieldErrors<FormRequiredRegisterUser>;
  handleFormIsValid: () => boolean;
  isVisiblePassword: boolean;
  handleShowPassword: () => void;
  handleShowConfirmPassword: () => void;
  isVisibleConfirmPassword: boolean;
  watchPassword: string;
  dataValidateCharacteres: DataValidateCharacteres[];
}

export interface FormRequiredRegisterUser {
  email: string;
  password: string;
  confirmPassword: string;
}

interface DataValidateCharacteres {
  type: string;
  label: string;
}

import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface IUseNewPasswordControllerProps {
  onSubmitResetPassword: () => Promise<void>;
  onSubmitEditPassword: () => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FormRequiredNewPassword>;
  control: Control<FormRequiredNewPassword>;
  errors: FieldErrors<FormRequiredNewPassword>;
  handleFormIsValid: () => boolean;
  isVisibleOldPassword: boolean;
  isVisiblePassword: boolean;
  isVisibleConfirmPassword: boolean;
  handleShowOldPassword: () => void;
  handleShowPassword: () => void;
  handleShowConfirmPassword: () => void;
  dataValidateCharacteres: DataValidateCharacteres[];
  watchPassword: string;
  isLoading: boolean;
  subTitle: string;
  fromScreen: string | undefined;
  isGeneralSettings: boolean;
}

export interface FormRequiredNewPassword {
  oldPassword?: string;
  password: string;
  confirmPassword: string;
}

interface DataValidateCharacteres {
  type: string;
  label: string;
}

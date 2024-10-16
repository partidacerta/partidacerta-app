import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface IUseForgotPasswordControllerProps {
  onSubmitForgotPassword: () => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FormRequiredForgotPassword>;
  control: Control<FormRequiredForgotPassword>;
  errors: FieldErrors<FormRequiredForgotPassword>;
  isValid: boolean;
  isLoading: boolean;
}

export interface FormRequiredForgotPassword {
  email: string;
}

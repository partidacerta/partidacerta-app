import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface IUseForgotPasswordControllerProps {
  onSubmitSendEmail: () => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FormRequiredSendEmail>;
  control: Control<FormRequiredSendEmail>;
  errors: FieldErrors<FormRequiredSendEmail>;
  isValid: boolean;
}

export interface FormRequiredSendEmail {
  email: string;
}

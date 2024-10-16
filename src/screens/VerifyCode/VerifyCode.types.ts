import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface IUseVerifyCodeControllerProps {
  onSubmitVerifyCode: () => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FormRequiredVerifyCode>;
  control: Control<FormRequiredVerifyCode>;
  errors: FieldErrors<FormRequiredVerifyCode>;
  isValid: boolean;
  isLoading: boolean;
  handleResendResetCode: () => void;
}

export interface FormRequiredVerifyCode {
  code: string;
}

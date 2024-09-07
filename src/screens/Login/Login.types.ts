import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface UseLoginControllerProps {
  onSubmit: () => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FormRequiredLogin>;
  control: Control<FormRequiredLogin>;
  errors: FieldErrors<FormRequiredLogin>;
  isValid: boolean;
}

export interface FormRequiredLogin {
  email: string;
  password: string;
}

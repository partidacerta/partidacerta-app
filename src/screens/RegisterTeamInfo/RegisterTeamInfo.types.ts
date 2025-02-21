import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface IUseRegisterTeamInfoProps {
  control: Control<FormRequiredRegisterTeamInfo>;
  errors: FieldErrors<FormRequiredRegisterTeamInfo>;
  isValid: boolean;
  handleSubmit: UseFormHandleSubmit<FormRequiredRegisterTeamInfo>;
  onSubmitRegisterTeamInfo: () => Promise<void>;
}

export interface FormRequiredRegisterTeamInfo {
  email: string;
  phone: string;
  description: string;
}

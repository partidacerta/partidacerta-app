import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface IUseRegisterTeamProps {
  logo: string | undefined;
  setLogo: (newImage: string) => void;
  control: Control<FormRequiredRegisterTeam>;
  errors: FieldErrors<FormRequiredRegisterTeam>;
  isValid: boolean;
  handleSubmit: UseFormHandleSubmit<FormRequiredRegisterTeam>;
  onSubmitRegisterTeam: () => Promise<void>;
}

export interface FormRequiredRegisterTeam {
  name: string;
  sportType: string;
  modality: string;
  uf: string;
  city: string;
}

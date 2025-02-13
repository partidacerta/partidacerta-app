import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface IUseRegisterTeamProps {
  image: string;
  setImage: (newImage: string) => void;
  control: Control<FormRequiredRegisterTeam>;
  errors: FieldErrors<FormRequiredRegisterTeam>;
  isValid: boolean;
  handleSubmit: UseFormHandleSubmit<FormRequiredRegisterTeam>;
  onSubmitRegisterTeam: () => Promise<void>;
}

export interface FormRequiredRegisterTeam {
  name: string;
  sport: string;
  modality: string;
  uf: string;
  city: string;
}

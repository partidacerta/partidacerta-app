import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

import { SPORTS_MODALITIES } from '@/src/constants/SportsModalities';

export interface IUseRegisterTeamProps {
  logo: string | undefined;
  setLogo: (newImage: string) => void;
  control: Control<FormRequiredRegisterTeam>;
  errors: FieldErrors<FormRequiredRegisterTeam>;
  isValid: boolean;
  handleSubmit: UseFormHandleSubmit<FormRequiredRegisterTeam>;
  onSubmitRegisterTeam: () => Promise<void>;
  modalityOptions: ModalityOption[];
  handleSportChange: (sport: string) => void;
  isModalityDisabled: boolean;
}

export interface FormRequiredRegisterTeam {
  name: string;
  sportType: string;
  modality: string;
  uf: string;
  city: string;
}

export type ModalityOption = {
  key: string;
  value: string;
  apiValue: string;
};

export type Sport = keyof typeof SPORTS_MODALITIES;

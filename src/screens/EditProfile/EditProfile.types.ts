import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

import { IPlayerDTO } from '@/src/services/player/player.dto';

export interface IUseEditProfileControllerProps {
  playerData: IPlayerDTO | undefined;
  handleSubmit: UseFormHandleSubmit<FormRequiredEditProfile>;
  control: Control<FormRequiredEditProfile>;
  errors: FieldErrors<FormRequiredEditProfile>;
  genderOptions: GenderOptions[];
  shouldDisabledButton: boolean;
}

export interface FormRequiredEditProfile {
  name: string;
  nickname: string;
  gender: string;
  height: string;
  shirtNumber: string;
  // sports: string;
  // modality: string;
  // position: string;
}

interface GenderOptions {
  key: string;
  value: string;
}

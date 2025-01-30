/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

import { IPlayerDTO } from '@/src/services/player/player.dto';

export interface IUseEditProfileControllerProps {
  playerData: IPlayerDTO | undefined;
  handleSubmit: UseFormHandleSubmit<FormRequiredEditProfile>;
  control: Control<FormRequiredEditProfile>;
  errors: FieldErrors<FormRequiredEditProfile>;
  shouldDisabledButton: boolean;
  shouldShowSelectModality: boolean;
  shouldShowSelectPosition: boolean;
  handleOptionsSelectPositions: () => any;
}

export interface FormRequiredEditProfile {
  name: string;
  nickname: string;
  gender: string;
  height: string;
  shirtNumber: string;
  sport: string;
  modality: string;
  position: string;
}

export interface IPositionOption {
  key: string;
  label: string;
}

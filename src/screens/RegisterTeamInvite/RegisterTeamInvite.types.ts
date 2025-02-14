import { IUserAuthMeDTO } from '@/src/services/auth/auth.dto';

import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface IUseRegisterTeamInviteProps {
  userAuth: IUserAuthMeDTO | undefined;
  control: Control<FormRequiredRegisterTeamInvite>;
  errors: FieldErrors<FormRequiredRegisterTeamInvite>;
  isValid: boolean;
  handleSubmit: UseFormHandleSubmit<FormRequiredRegisterTeamInvite>;
  onSubmitRegisterTeamInvite: () => Promise<void>;
}

export interface FormRequiredRegisterTeamInvite {
  genderTeam: string;
}

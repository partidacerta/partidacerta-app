import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

import { IUserAuthMeDTO } from '@/src/services/auth/auth.dto';
import { IPlayer, IPlayerDTO } from '@/src/services/player/player.dto';

export interface IUseRegisterTeamInviteProps {
  userAuth: IUserAuthMeDTO | undefined;
  modalType: 'invite' | 'details' | null;
  handleOpenModal: (type: 'invite' | 'details') => void;
  handleCloseModal: () => void;
  control: Control<FormRequiredRegisterTeamInvite>;
  errors: FieldErrors<FormRequiredRegisterTeamInvite>;
  isValid: boolean;
  handleSubmit: UseFormHandleSubmit<FormRequiredRegisterTeamInvite>;
  onSubmitRegisterTeamInvite: () => Promise<void>;
  players: IPlayerDTO | undefined;
  isLoading: boolean;
  searchPlayer: string;
  setSearchPlayer: (value: string) => void;
  handleSearchPlayer: () => Promise<void>;
  selectedPlayers: IPlayer[];
  setSelectedPlayers: React.Dispatch<React.SetStateAction<IPlayer[]>>;
  handleInvitePlayer: (player: IPlayer) => void;
  handleRemovePlayer: (playerId: string) => void;
}

export interface FormRequiredRegisterTeamInvite {
  genderTeam: string;
}

import { ITeamDTO } from '@/src/services/team/team.dto';

export interface IUseTeamProfileControllerProps {
  teamData: ITeamDTO | undefined;
  isLoading: boolean;
  modalType:
    | 'LeaveTeam'
    | 'cancelRequest'
    | 'declineInvite'
    | 'acceptInvite'
    | null;
  handleOpenModal: (
    type: 'LeaveTeam' | 'cancelRequest' | 'declineInvite' | 'acceptInvite'
  ) => void;
  handleCloseModal: () => void;
  mapTeamGender: (gender: string | undefined) => string | undefined;
  handlePlayerRequestJoin: () => void;
  handlePlayerRequestCancel: () => void;
  handleLeaveTeam: () => void;
  handleDeclineTeamInvite: () => void;
  handleAcceptPlayerInTeam: () => void;
}

import { ITeamDTO } from '@/src/services/team/team.dto';

export interface IUseTeamProfileControllerProps {
  teamData: ITeamDTO | undefined;
  isLoading: boolean;
  modalType: 'logout' | 'cancel' | 'refuse' | 'accept' | null;
  handleOpenModal: (type: 'logout' | 'cancel' | 'refuse' | 'accept') => void;
  handleCloseModal: () => void;
  mapTeamGender: (gender: string | undefined) => string | undefined;
}

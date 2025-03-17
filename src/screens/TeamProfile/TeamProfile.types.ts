import { ITeamDTO } from '@/src/services/team/team.dto';

export interface IUseTeamProfileControllerProps {
  teamData: ITeamDTO | undefined;
  isLoading: boolean;
  mapTeamGender: (gender: string | undefined) => string | undefined;
}

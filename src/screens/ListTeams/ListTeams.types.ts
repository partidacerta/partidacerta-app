import { IListTeams } from '@/src/services/team/team.dto';

export interface IUseListTeamsControllerProps {
  teams: IListTeams | undefined;
  isLoading: boolean;
  searchTeam: string;
  setSearchTeam: (value: string) => void;
  handleSearchTeam: () => Promise<void>;
  selectedSport: string | null;
  setSelectedSport: (value: string | null) => void;
}

import { IPlayer } from '@/src/services/player/player.dto';
import { IListTeams, ITeamDTO } from '@/src/services/team/team.dto';

export type TeamStoreProps = {
  teamDataCreated: TeamDataProps;
  setTeamData: ({
    logo,
    name,
    interestSport,
    location,
    teamGender,
  }: TeamDataProps) => void;
  RegisterTeam: () => void;
  isLoading: boolean;
  selectedPlayers: IPlayer[];
  addPlayer: (player: IPlayer) => void;
  removePlayer: (playerId: string) => void;
  teams?: IListTeams;
  getTeams: (name?: string, location?: string, sport?: string) => Promise<void>;
  getTeamById: (teamId: string) => void;
  teamData?: ITeamDTO;
  playerRequestJoin: (teamId: string, playerId: string) => void;
  playerRequestCancel: (teamId: string, playerId: string) => void;
  leaveTeam: (teamId: string, playerId: string) => void;
  declineTeamInvite: (teamId: string, playerId: string) => void;
  acceptPlayerInTeam: (teamId: string, playerId: string) => void;
  makeAsync: <T>(props: {
    handle: () => Promise<T>;
    onError?: (error: unknown) => void;
    onFinally?: () => void;
  }) => Promise<void>;
};

export interface TeamDataProps {
  logo?: string;
  name?: string;
  interestSport?: {
    sportType: string;
    modality: string;
  };
  location?: {
    city: string;
    uf: string;
  };
  teamGender?: string;
  manager?: {
    managerId: string;
  };
  players?: string[];
  contact?: {
    email: string;
    phone: string;
  };
  description?: string;
}

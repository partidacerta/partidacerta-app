import { IPlayer } from '@/src/services/player/player.dto';

export type TeamStoreProps = {
  teamData: TeamDataProps;
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

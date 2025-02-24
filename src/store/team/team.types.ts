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
  players?: string[];
  contact?: {
    email: string;
    phone: string;
  };
  description?: string;
  // manager?: {
  //   managerId: string;
  // };
}

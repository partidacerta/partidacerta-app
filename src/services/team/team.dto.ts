export interface ITeamRequest {
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

export interface ITeam {
  id: string;
  name: string;
  logo: string;
  location: string;
  gender: 'MALE' | 'FEMALE' | 'MIXED';
  sport: string;
  modality: string;
  playerLoggedHasBeenInvitedToJoin: boolean;
  playerLoggedHasSentRequestToJoin: boolean;
  playerLoggedWasInTeam: boolean;
  playerLoggedIsAdminInTeam: boolean;
  numberOfPlayers: number;
}

export interface IPageable {
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface IListTeams {
  content: ITeam[];
  pageable: IPageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  number: number;
  numberOfElements: number;
  size: number;
  empty: boolean;
}

export interface ITeamDTO {
  id: string;
  name: string;
  logo: string;
  isActive: boolean;
  playerLoggedHasBeenInvitedToJoin: boolean;
  playerLoggedHasSentRequestToJoin: boolean;
  playerLoggedWasInTeam: boolean;
  playerLoggedIsManagerOrAssistant: boolean;
  creationDate: string;
  lastUpdateDate: string;
  numberOfPlayers: number;
  numberOfTeamInvitations: number;
  numberOfPlayerRequests: number;
  basicInfo: {
    description: string;
    teamGender: string;
    interestSport: {
      sportType: string;
      modality: string;
    };
    location: {
      city: string;
      uf: string;
    };
    contact: {
      email: string;
      phone: string;
    };
  };
  management: {
    manager: {
      id: string;
      fullName: string;
      nickname: string;
      playerImage: string;
      isActive: boolean;
    };
    assistantManager: null | {
      id: string;
      fullName: string;
      nickname: string;
      playerImage: string;
      isActive: boolean;
    };
  };
  members: {
    players: {
      id: string;
      fullName: string;
      nickname: string;
      playerImage: string;
      isActive: boolean;
    }[];
    requests: null;
  };
}

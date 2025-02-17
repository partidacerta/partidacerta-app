export interface IPlayer {
  id: string;
  firstName: string;
  fullName: string;
  nickname: string;
  playerImage: string;
  interestSport:
    | {
        sportType: string;
        modality: string;
        position: string | null;
      }[]
    | null;
  gender: string | null;
  height: string | null;
  shirtNumber: number | null;
  teamDetail: {
    teamData: {
      id: string;
      name: string;
      logo: string;
      description: string;
    }[];
    assistantManagerInTeamsData: {
      id: string;
      name: string;
      logo: string;
      description: string;
    }[];
    managerInTeamsData: {
      id: string;
      name: string;
      logo: string;
      description: string;
    }[];
  };
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

export interface IPlayerDTO {
  content: IPlayer[];
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

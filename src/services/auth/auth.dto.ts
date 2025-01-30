export interface IUserAuthLoginDTO extends IUserAuthMeDTO {
  token: string;
}

export interface IUserAuthMeDTO {
  id: string;
  username: string;
  name: string;
  firstName: string;
  nickname: string;
  birthdate: string | null;
  age: number | null;
  phone: number | null;
  city: string | null;
  uf: string | null;
  role: string;
  acceptsTerms: boolean;
  playerInfo: {
    id: string;
    playerImage: string;
    interestSport: IUserInterestSport[];
    gender: string | null;
    height: number | null;
    shirtNumber: number | null;
    teamDetail: {
      teamData: IUserTeamData[];
    };
  };
  verified: boolean;
  complete: boolean;
  active: boolean;
}

export interface IUserInterestSport {
  sportType: string;
  modality: string;
  position: string;
}

export interface IUserTeamData {
  id: string;
  name: string;
  logo: string;
  description: string;
}

export interface IUserResetPasswordDTO {
  email?: string;
  resetCode?: string;
}

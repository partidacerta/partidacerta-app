export interface IPlayerDTO {
  id: string;
  firstName: string;
  fullName: string;
  nickname: string;
  playerImage: string;
  interestSport: IPlayerInterestSport[];
  gender: string;
  height: string;
  shirtNumber: number;
  teamDetail: {
    managerInTeamId: string[];
    assistantManagerInTeamId: string[];
    teamId: string[];
  };
  userId: string;
  firstAccess: boolean;
}

export interface IPlayerInterestSport {
  sportType: string;
  modality: string;
  position: string;
}

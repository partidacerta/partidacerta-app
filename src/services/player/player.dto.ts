export interface IPlayerDTO {
  id: string;
  firstName: string;
  fullName: string;
  nickname: string;
  playerImage: string;
  interestSport: {
    sportType: string;
    modality: string;
  }[];
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

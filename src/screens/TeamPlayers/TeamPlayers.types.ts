export interface IUseTeamPlayersControllerProps {
  parsedPlayers: Player[];
}

export interface Player {
  id: string;
  fullName: string;
  nickname: string;
  playerImage: string;
  position: string;
  isActive: boolean;
}

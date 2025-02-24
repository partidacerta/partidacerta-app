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
  // players: string[];
  // contact: {
  //   email: string;
  //   phone: string;
  // };
  // description: string;
  // manager: {
  //   managerId: string;
  // };
}

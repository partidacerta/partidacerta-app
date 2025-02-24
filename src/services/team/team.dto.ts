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

import { instance } from '../api/api';
import { ITeamRequest } from './team.dto';

export const postTeamRegisterRequest = async ({
  logo,
  name,
  interestSport,
  location,
  teamGender,
  players,
  contact,
  description,
}: // manager,
{
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
  players: string[];
  contact?: {
    email: string;
    phone: string;
  };
  description?: string;
  // manager?: {
  //   managerId: string;
  // };
}): Promise<ITeamRequest> => {
  try {
    const { data } = await instance.post('/team', {
      logo,
      name,
      interestSport,
      location,
      teamGender,
      players,
      contact,
      description,
      // manager,
    });

    return data;
  } catch (error) {
    throw new Error('Erro ao criar o time');
  }
};

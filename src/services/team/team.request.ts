import { instance } from '../api/api';
import { IListTeams, ITeamDTO, ITeamRequest } from './team.dto';

export const postTeamRegisterRequest = async ({
  logo,
  name,
  interestSport,
  location,
  teamGender,
  manager,
  players,
  contact,
  description,
}: {
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
  players: string[];
  contact?: {
    email: string;
    phone: string;
  };
  description?: string;
}): Promise<ITeamRequest> => {
  try {
    const { data } = await instance.post('/team', {
      logo,
      name,
      interestSport,
      location,
      teamGender,
      manager,
      players,
      contact,
      description,
    });

    return data;
  } catch (error) {
    throw new Error('Erro ao criar o time');
  }
};

export const getTeamsRequest = async ({
  name,
  location,
  sport,
}: {
  name?: string;
  location?: string;
  sport?: string;
} = {}): Promise<IListTeams> => {
  try {
    const { data } = await instance.get('/team', {
      params: { name, sport },
    });
    return data;
  } catch (error) {
    throw new Error('Erro ao buscar times');
  }
};

export const getTeamByIdRequest = async ({
  teamId,
}: {
  teamId: string;
}): Promise<ITeamDTO> => {
  try {
    const { data } = await instance.get(`/team/${teamId}`);
    return data;
  } catch (error) {
    throw new Error('Erro ao buscar dados do time');
  }
};

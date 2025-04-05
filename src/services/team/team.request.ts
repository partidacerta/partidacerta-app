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

export const postPlayerRequestJoinRequest = async ({
  teamId,
  playerId,
}: {
  teamId: string;
  playerId: string;
}): Promise<void> => {
  try {
    const { data } = await instance.post(
      `/team/${teamId}/request/player/${playerId}`
    );
    return data;
  } catch (error) {
    throw new Error('Erro ao enviar solicitação para entrar no time');
  }
};

export const deletePlayerRequestCancelRequest = async ({
  teamId,
  playerId,
}: {
  teamId: string;
  playerId: string;
}): Promise<void> => {
  try {
    const { data } = await instance.delete(
      `/team/${teamId}/request/player/${playerId}/decline`
    );
    return data;
  } catch (error) {
    throw new Error('Erro ao cancelar solicitação para entrar no time');
  }
};

export const deleteLeaveTeamRequest = async ({
  teamId,
  playerId,
}: {
  teamId: string;
  playerId: string;
}): Promise<void> => {
  try {
    const { data } = await instance.delete(
      `/team/remove/${teamId}/player/${playerId}`
    );
    return data;
  } catch (error) {
    throw new Error('Erro ao sair do time');
  }
};

export const deleteDeclineTeamInviteRequest = async ({
  teamId,
  playerId,
}: {
  teamId: string;
  playerId: string;
}): Promise<void> => {
  try {
    const { data } = await instance.delete(
      `/team/${teamId}/invite/player/${playerId}/decline`
    );
    return data;
  } catch (error) {
    throw new Error('Erro para recusar convite de entrar no time');
  }
};

export const postAcceptPlayerInTeamRequest = async ({
  teamId,
  playerId,
}: {
  teamId: string;
  playerId: string;
}): Promise<void> => {
  try {
    const { data } = await instance.post(
      `/team/accept/${teamId}/player/${playerId}`
    );
    return data;
  } catch (error) {
    throw new Error('Erro para aceitar convite de entrar no time');
  }
};

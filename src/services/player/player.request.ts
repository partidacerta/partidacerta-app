import { instance } from '../api/api';
import { IPlayer, IPlayerDTO } from './player.dto';

export const getPlayerByIdRequest = async ({
  playerId,
}: {
  playerId: string;
}): Promise<IPlayer> => {
  try {
    const { data } = await instance.get(`/players/${playerId}`);
    return data;
  } catch (error) {
    throw new Error('Erro ao buscar dados do jogador');
  }
};

export const getPlayersRequest = async ({
  name,
  nickname,
}: {
  name?: string;
  nickname?: string;
} = {}): Promise<IPlayerDTO> => {
  try {
    const { data } = await instance.get('/players/contains', {
      params: { name, nickname },
    });
    return data;
  } catch (error) {
    throw new Error('Erro ao buscar jogadores');
  }
};

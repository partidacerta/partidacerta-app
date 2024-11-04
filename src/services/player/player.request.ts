import { instance } from '../api/api';
import { IPlayerDTO } from './player.dto';

export const getPlayerByIdRequest = async ({
  playerId,
}: {
  playerId: string;
}): Promise<IPlayerDTO> => {
  try {
    const { data } = await instance.get(`/players/${playerId}`);
    return data;
  } catch (error) {
    throw new Error('Erro ao buscar dados do player');
  }
};

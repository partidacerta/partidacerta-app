import { instance } from '../api/api';
import { IUserDTO } from './user.dto';

export const getUserByIdRequest = async ({
  userId,
}: {
  userId: string;
}): Promise<IUserDTO> => {
  try {
    const { data } = await instance.get(`/user/${userId}`);
    return data;
  } catch (error) {
    throw new Error('Erro ao buscar dados do usuário');
  }
};

export const deleteUserAccountRequest = async ({
  userId,
}: {
  userId: string;
}): Promise<void> => {
  try {
    await instance.delete(`/user/${userId}`);
  } catch (error) {
    throw new Error('Erro ao desativar a conta do usuário');
  }
};

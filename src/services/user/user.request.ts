import { instance } from '../api/api';

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

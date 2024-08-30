import { instance } from '../api/api';
import { IUserAuthDTO } from './auth.dto';

export const postAuthRequest = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<string> => {
  try {
    const { data } = await instance.post('/login', {
      email,
      password,
    });

    return data;
  } catch (error) {
    throw new Error('Erro ao fazer login');
  }
};

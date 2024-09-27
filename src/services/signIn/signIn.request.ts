import { instance } from '../api/api';
import { ISignInDTO } from './signIn.dto';

export const postSignInRequest = async ({
  name,
}: {
  name: string;
}): Promise<string> => {
  try {
    const { data } = await instance.post('/', {
      name,
    });

    return data;
  } catch (error) {
    throw new Error('Erro cadastrar usuário');
  }
};

import { instance } from '../api/api';
import { IUserAuthLoginDTO, IUserAuthMeDTO } from './auth.dto';

export const postAuthLoginRequest = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<IUserAuthLoginDTO> => {
  try {
    const { data } = await instance.post('/auth/login', {
      email,
      password,
    });

    return data;
  } catch (error) {
    throw new Error('Erro ao fazer login');
  }
};

export const postAuthRegisterRequest = async ({
  name,
  nickname,
  email,
  password,
  role,
  acceptsTerms,
}: {
  name?: string;
  nickname?: string;
  email?: string;
  password?: string;
  role?: string;
  acceptsTerms?: boolean;
}): Promise<IUserAuthMeDTO> => {
  try {
    const { data } = await instance.post('/auth/register', {
      name,
      nickname,
      email,
      password,
      role,
      acceptsTerms,
    });

    return data;
  } catch (error) {
    throw new Error('Erro cadastrar usuário');
  }
};

export const postAuthMeRequest = async (): Promise<IUserAuthMeDTO> => {
  try {
    const { data } = await instance.post('/auth/me');

    return data;
  } catch (error) {
    throw new Error('Erro ao buscar dados do usuário');
  }
};

export const getVerifyEmailRequest = async ({
  email,
}: {
  email: string;
}): Promise<boolean> => {
  try {
    const { data } = await instance.get(`/user/verify/email?search=${email}`);

    return data;
  } catch (error) {
    throw new Error('Erro ao verificar e-mail existente');
  }
};

export const getVerifyNicknameRequest = async ({
  nickname,
}: {
  nickname: string;
}): Promise<boolean> => {
  try {
    const { data } = await instance.get(
      `/user/verify/nickname?search=${nickname}`
    );

    return data;
  } catch (error) {
    throw new Error('Erro ao verificar nickname existente');
  }
};

export const postResetPasswordRequest = async ({
  email,
}: {
  email: string;
}): Promise<string> => {
  try {
    const { data } = await instance.post(
      `/auth/reset-password/initiate?email=${email}`
    );

    return data;
  } catch (error) {
    throw new Error('Erro ao solicitar redefinição de senha');
  }
};

export interface IUserAuthLoginDTO extends IUserAuthMeDTO {
  token: string;
}

export interface IUserAuthMeDTO {
  id: string;
  name: string;
  nickname: string;
  email: string;
  birthdate: string;
  phone: number;
  city: string;
  uf: string;
  role: string;
  acceptsTerms: boolean;
  playerId: string;
  verified: boolean;
  complete: boolean;
}

export interface IUserResetPasswordDTO {
  email?: string;
  resetCode?: string;
}

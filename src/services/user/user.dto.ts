export interface IUserDTO {
  id: string;
  name: string;
  nickname: string;
  email: string;
  birthdate: string | null;
  phone: string;
  city: string;
  uf: string;
  role: string;
  acceptsTerms: boolean;
  termsAcceptedDate: string | null;
  createDate: string;
  updateDate: string;
  playerId: string;
  isActive: boolean;
  complete: boolean;
  verified: boolean;
}

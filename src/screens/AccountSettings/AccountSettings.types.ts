import { Dispatch, SetStateAction } from 'react';

export interface IFormData {
  name: string;
  nickname: string;
  email: string;
  birthdate: string;
  phone: string;
  uf: string;
  city: string;
}

export interface IState {
  label: string;
  value: string;
}

export interface IUseAccountSettingsProps {
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
  isLoading: boolean;
  states: IState[];
  handleUpdate: () => Promise<void>;
}

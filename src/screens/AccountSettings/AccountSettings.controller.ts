import { IUseAccountSettingsProps } from './AccountSettings.types';

export const useAccountSettingsController = (): IUseAccountSettingsProps => {
  const uf = [
    { label: 'RS', value: 'RS' },
    { label: 'SP', value: 'SP' },
    { label: 'RJ', value: 'RJ' },
  ];

  const cities = [
    { label: 'Cidade 1', value: 'citie1' },
    { label: 'Cidade 2', value: 'citie2' },
    { label: 'Cidade 3', value: 'citie3' },
  ];

  return {
    uf,
    cities,
  };
};

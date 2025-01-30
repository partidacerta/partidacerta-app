import { useState } from 'react';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import usePlayerStore from '@/src/store/player/player.store';

import {
  FormRequiredEditProfile,
  IUseEditProfileControllerProps,
} from './EditProfile.types';

export const useEditProfileController = (): IUseEditProfileControllerProps => {
  const { playerData } = usePlayerStore();

  const genderOptions = [
    { key: '1', value: 'Feminino' },
    { key: '2', value: 'Masculino' },
  ];

  const schema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    nickname: yup.string().required('O nickname é obrigatório'),
    gender: yup.string().required('O gênero é obrigatório'),
    height: yup.string().required('A altura é obrigatório'),
    shirtNumber: yup.string().required('O número da camiseta é obrigatório'),
    // sports: yup.string().required('O esporte é obrigatório'),
    // modality: yup.string().required('A modalidade é obrigatória'),
    // position: yup.string().required('A posição é obrigatória'),
  });

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormRequiredEditProfile>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name: playerData?.fullName,
      nickname: playerData?.nickname,
      gender: '',
      height: playerData?.height || '',
      shirtNumber: playerData?.shirtNumber?.toString() || '',
    },
  });

  const shouldDisabledButton = !isValid;

  return {
    playerData,
    handleSubmit,
    control,
    errors,
    genderOptions,
    shouldDisabledButton,
  };
};

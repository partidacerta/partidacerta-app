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

  const schema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    nickname: yup.string().required('O nickname é obrigatório'),
    gender: yup.string().required('O gênero é obrigatório'),
    height: yup.string().required('A altura é obrigatório'),
    shirtNumber: yup.number().required('O número da camiseta é obrigatório'),
    sports: yup.string().required('O esporte é obrigatório'),
    modality: yup.string().required('A modalidade é obrigatória'),
    position: yup.string().required('A posição é obrigatória'),
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormRequiredEditProfile>({
    defaultValues: {
      name: playerData?.fullName,
      nickname: playerData?.nickname,
      gender: '',
      height: playerData?.height,
      shirtNumber: playerData?.shirtNumber,
      sports: '',
      modality: '',
      position: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  return {
    playerData,
    handleSubmit,
    control,
    errors,
    isValid,
  };
};

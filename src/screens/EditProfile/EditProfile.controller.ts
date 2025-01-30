import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import { SPORTS } from '@/src/constants/Sports';
import { SPORTS_POSITIONS } from '@/src/constants/SportsPositions';
import usePlayerStore from '@/src/store/player/player.store';

import {
  FormRequiredEditProfile,
  IUseEditProfileControllerProps,
} from './EditProfile.types';

export const useEditProfileController = (): IUseEditProfileControllerProps => {
  const { playerData } = usePlayerStore();

  const [shouldShowSelectModality, setShouldShowSelectModality] =
    useState(false);
  const [shouldShowSelectPosition, setShouldShowSelectPosition] =
    useState(false);

  const schema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    nickname: yup.string().required('O nickname é obrigatório'),
    gender: yup.string().required('O gênero é obrigatório'),
    height: yup.string().required('A altura é obrigatório'),
    shirtNumber: yup.string().required('O número da camiseta é obrigatório'),
    sport: yup.string().required('O esporte é obrigatório'),
    modality: yup.string().required('A modalidade é obrigatória'),
    position: yup.string().required('A posição é obrigatória'),
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
      sport: '',
      modality: '',
      position: '',
    },
  });

  const shouldDisabledButton = !isValid;

  const watchSport = useWatch({
    control,
    name: 'sport',
  });

  const watchModality = useWatch({
    control,
    name: 'modality',
  });

  const handleOptionsSelectPositions = () => {
    if (!watchSport) return [];

    switch (watchSport) {
      case SPORTS.SOCCER:
        return SPORTS_POSITIONS.SOCCER;
      case SPORTS.VOLLEYBALL:
        return SPORTS_POSITIONS.VOLLEYBALL;
      case SPORTS.BASKETBALL:
        return SPORTS_POSITIONS.BASKETBALL;
      case SPORTS.HANDBALL:
        return SPORTS_POSITIONS.HANDBALL;
      default:
        return [];
    }
  };

  useEffect(() => {
    if (watchSport === SPORTS.SOCCER) {
      setShouldShowSelectModality(true);
    } else {
      setShouldShowSelectModality(false);
    }

    if (
      watchSport !== '' &&
      watchSport !== SPORTS.TENNIS &&
      watchSport !== SPORTS.PADEL
    ) {
      setShouldShowSelectPosition(true);
    } else {
      setShouldShowSelectPosition(false);
    }
  }, [watchSport, watchModality]);

  return {
    playerData,
    handleSubmit,
    control,
    errors,
    shouldDisabledButton,
    shouldShowSelectModality,
    shouldShowSelectPosition,
    handleOptionsSelectPositions,
  };
};

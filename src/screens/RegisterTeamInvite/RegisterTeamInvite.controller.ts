import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { router } from 'expo-router';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import useAuthStore from '@/src/store/auth/auth.store';
import usePlayerStore from '@/src/store/player/player.store';

import {
  FormRequiredRegisterTeamInvite,
  IUseRegisterTeamInviteProps,
} from './RegisterTeamInvite.types';

export const useRegisterTeamInviteController =
  (): IUseRegisterTeamInviteProps => {
    const { userAuth } = useAuthStore();
    const { players, isLoading, getPlayers } = usePlayerStore();

    const [searchPlayer, setSearchPlayer] = useState('');

    const handleSearchPlayer = async () => {
      await getPlayers(searchPlayer, searchPlayer);
    };

    const [isModalVisible, setModalVisible] = useState(false);

    const handleOpenModal = () => setModalVisible(true);
    const handleCloseModal = () => setModalVisible(false);

    const schema = yup.object().shape({
      genderTeam: yup.string().required('O gênero é obrigatório'),
    });

    const {
      handleSubmit,
      control,
      getValues,
      formState: { errors, isValid },
    } = useForm<FormRequiredRegisterTeamInvite>({
      defaultValues: {
        genderTeam: '',
      },
      mode: 'onChange',
      resolver: yupResolver(schema),
    });

    const onSubmitRegisterTeamInvite = async (): Promise<void> => {
      const { genderTeam } = getValues();

      // router.push('');
    };

    return {
      userAuth,
      isModalVisible,
      handleOpenModal,
      handleCloseModal,
      errors,
      control,
      isValid,
      handleSubmit,
      onSubmitRegisterTeamInvite,
      players,
      isLoading,
      searchPlayer,
      setSearchPlayer,
      handleSearchPlayer,
    };
  };

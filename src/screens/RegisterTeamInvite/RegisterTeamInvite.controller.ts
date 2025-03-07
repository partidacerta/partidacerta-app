import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { router } from 'expo-router';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import { IPlayer } from '@/src/services/player/player.dto';
import useAuthStore from '@/src/store/auth/auth.store';
import usePlayerStore from '@/src/store/player/player.store';
import useTeamStore from '@/src/store/team/team.store';

import {
  FormRequiredRegisterTeamInvite,
  IUseRegisterTeamInviteProps,
} from './RegisterTeamInvite.types';

export const useRegisterTeamInviteController =
  (): IUseRegisterTeamInviteProps => {
    const { userAuth } = useAuthStore();
    const { players, isLoading, getPlayers } = usePlayerStore();
    const { setTeamData, selectedPlayers, addPlayer, removePlayer } =
      useTeamStore();

    const [searchPlayer, setSearchPlayer] = useState('');
    const [selectedPlayer, setSelectedPlayer] = useState<IPlayer | null>(null);

    const managerId = userAuth?.playerInfo?.id;

    const handleSearchPlayer = async () => {
      await getPlayers(searchPlayer, searchPlayer);
    };

    const handleInvitePlayer = (player: IPlayer) => {
      addPlayer(player);
    };

    const handleRemovePlayer = (playerId: string) => {
      removePlayer(playerId);
    };

    const [modalType, setModalType] = useState<'invite' | 'details' | null>(
      null
    );

    const handleOpenModal = (type: 'invite' | 'details') => {
      setModalType(type);
    };

    const handleCloseModal = () => {
      setModalType(null);
    };

    const schema = yup.object().shape({
      teamGender: yup.string().required('O gênero é obrigatório'),
    });

    const {
      handleSubmit,
      control,
      getValues,
      formState: { errors, isValid },
    } = useForm<FormRequiredRegisterTeamInvite>({
      defaultValues: {
        teamGender: '',
      },
      mode: 'onChange',
      resolver: yupResolver(schema),
    });

    const onSubmitRegisterTeamInvite = async (): Promise<void> => {
      const { teamGender } = getValues();

      setTeamData({
        teamGender,
        manager: {
          managerId: managerId ?? '',
        },
        players: userAuth
          ? [
              userAuth?.playerInfo?.id,
              ...selectedPlayers.map(player => player.id),
            ]
          : selectedPlayers.map(player => player.id),
      });

      router.push('/RegisterTeamInfo.stack');
    };

    return {
      userAuth,
      modalType,
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
      selectedPlayer,
      setSelectedPlayer,
      handleSearchPlayer,
      selectedPlayers,
      handleInvitePlayer,
      handleRemovePlayer,
    };
  };

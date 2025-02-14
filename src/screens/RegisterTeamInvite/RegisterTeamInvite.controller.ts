import useAuthStore from '@/src/store/auth/auth.store';
import { useForm } from 'react-hook-form';

import { router } from 'expo-router';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import {
  FormRequiredRegisterTeamInvite,
  IUseRegisterTeamInviteProps,
} from './RegisterTeamInvite.types';

export const useRegisterTeamController = (): IUseRegisterTeamInviteProps => {
  const { userAuth } = useAuthStore();

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
    errors,
    control,
    isValid,
    handleSubmit,
    onSubmitRegisterTeamInvite,
  };
};

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { router } from 'expo-router';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import useTeamStore from '@/src/store/team/team.store';

import {
  FormRequiredRegisterTeam,
  IUseRegisterTeamProps,
} from './RegisterTeam.types';

export const useRegisterTeamController = (): IUseRegisterTeamProps => {
  const { setTeamData } = useTeamStore();

  const [logo, setLogo] = useState(
    'https://s3.amazonaws.com/camila.bucket/ProfileImage.jpg'
  );

  const schema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    sportType: yup.string().required('O esporte é obrigatório'),
    modality: yup.string().required('A modalidade é obrigatória'),
    uf: yup.string().required('O UF é obrigatório'),
    city: yup.string().required('A cidade é obrigatória'),
  });

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormRequiredRegisterTeam>({
    defaultValues: {
      name: '',
      modality: '',
      uf: '',
      city: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmitRegisterTeam = async (): Promise<void> => {
    const { name, sportType, modality, uf, city } = getValues();

    setTeamData({
      logo,
      name,
      interestSport: {
        sportType,
        modality,
      },
      location: {
        uf,
        city,
      },
    });

    router.push('/RegisterTeamInvite.stack');
  };

  return {
    logo,
    setLogo,
    errors,
    control,
    isValid,
    handleSubmit,
    onSubmitRegisterTeam,
  };
};

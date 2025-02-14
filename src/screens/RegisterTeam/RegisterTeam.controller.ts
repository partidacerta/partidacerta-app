import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { router } from 'expo-router';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import {
  FormRequiredRegisterTeam,
  IUseRegisterTeamProps,
} from './RegisterTeam.types';

export const useRegisterTeamController = (): IUseRegisterTeamProps => {
  const [image, setImage] = useState(
    'https://s3.amazonaws.com/camila.bucket/ProfileImage.jpg'
  );

  const schema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    sport: yup.string().required('O esporte é obrigatório'),
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
    const { name, modality, uf, city } = getValues();

    router.push('/RegisterTeamInvite.stack');
  };

  return {
    image,
    setImage,
    errors,
    control,
    isValid,
    handleSubmit,
    onSubmitRegisterTeam,
  };
};

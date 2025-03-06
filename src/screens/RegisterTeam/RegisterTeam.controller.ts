import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { router } from 'expo-router';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import { SPORTS_MODALITIES } from '@/src/constants/SportsModalities';
import useTeamStore from '@/src/store/team/team.store';

import {
  FormRequiredRegisterTeam,
  IUseRegisterTeamProps,
  ModalityOption,
  Sport,
} from './RegisterTeam.types';

export const useRegisterTeamController = (): IUseRegisterTeamProps => {
  const { setTeamData } = useTeamStore();

  const [logo, setLogo] = useState<string | undefined>(
    'https://s3.amazonaws.com/camila.bucket/ProfileImage.jpg'
  );

  const [modalityOptions, setModalityOptions] = useState<ModalityOption[]>([]);

  const handleSportChange = (sport: string) => {
    if (sport in SPORTS_MODALITIES) {
      setModalityOptions(SPORTS_MODALITIES[sport as Sport] || []);
    } else {
      setModalityOptions([]);
    }
  };

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

    const finalLogo =
      logo === 'https://s3.amazonaws.com/camila.bucket/ProfileImage.jpg'
        ? undefined
        : logo;

    setTeamData({
      logo: finalLogo,
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
    modalityOptions,
    handleSportChange,
  };
};

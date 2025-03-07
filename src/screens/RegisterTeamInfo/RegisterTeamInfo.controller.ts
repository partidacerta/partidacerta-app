import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import useTeamStore from '@/src/store/team/team.store';

import {
  FormRequiredRegisterTeamInfo,
  IUseRegisterTeamInfoProps,
} from './RegisterTeamInfo.types';

export const useRegisterTeamInfoController = (): IUseRegisterTeamInfoProps => {
  const { setTeamData, RegisterTeam } = useTeamStore();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    phone: yup.string().required('O telefone é obrigatório'),
  });

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormRequiredRegisterTeamInfo>({
    defaultValues: {
      email: '',
      phone: '',
      description: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmitRegisterTeamInfo = async (): Promise<void> => {
    const { email, phone, description } = getValues();

    setTeamData({
      contact: {
        email,
        phone: phone.replace(/\D/g, ''),
      },
      description,
    });

    RegisterTeam();
  };

  return { errors, control, isValid, handleSubmit, onSubmitRegisterTeamInfo };
};

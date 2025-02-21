import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import {
  FormRequiredRegisterTeamInfo,
  IUseRegisterTeamInfoProps,
} from './RegisterTeamInfo.types';

export const useRegisterTeamInfoController = (): IUseRegisterTeamInfoProps => {
  const schema = yup.object().shape({
    email: yup.string().required('O e-mail é obrigatório'),
    phone: yup.string().required('O telefone é obrigatório'),
    description: yup.string().required('A descrição é obrigatória'),
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
  };

  return { errors, control, isValid, handleSubmit, onSubmitRegisterTeamInfo };
};

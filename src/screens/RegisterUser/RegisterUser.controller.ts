import { useState } from 'react';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import {
  FormRequiredRegisterUser,
  IUseRegisterUserControllerProps,
} from './RegisterUser.types';

export const useRegisteUserController = (): IUseRegisterUserControllerProps => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);

  const handleShowPassword = () => {
    setIsVisiblePassword(prev => !prev);
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup.string().required('A senha é obrigatória'),
    confirmPassword: yup.string().required('A senha é obrigatória'),
  });

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormRequiredRegisterUser>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmitRegisterUser = async (): Promise<void> => {
    const { email, password, confirmPassword } = getValues();
  };

  return {
    isValid,
    errors,
    control,
    isVisiblePassword,
    handleShowPassword,
    handleSubmit,
    onSubmitRegisterUser,
  };
};

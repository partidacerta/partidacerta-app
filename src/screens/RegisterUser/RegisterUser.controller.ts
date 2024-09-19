import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { router } from 'expo-router';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import {
  FormRequiredRegisterUser,
  IUseRegisterUserControllerProps,
} from './RegisterUser.types';

export const useRegisteUserController = (): IUseRegisterUserControllerProps => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(true);

  const handleShowPassword = () => {
    setIsVisiblePassword(prev => !prev);
  };

  const handleShowConfirmPassword = () => {
    setIsVisibleConfirmPassword(prev => !prev);
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup.string().required('A senha é obrigatória'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'As senhas precisam ser iguais')
      .required('A confirmação de senha é obrigatória'),
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

  const watchPassword = useWatch({
    control,
    name: 'password',
  });

  const onSubmitRegisterUser = async (): Promise<void> => {
    const { email, password, confirmPassword } = getValues();
    router.push('/(tabs)/(home)');
  };

  return {
    isValid,
    errors,
    control,
    isVisiblePassword,
    handleShowPassword,
    handleSubmit,
    onSubmitRegisterUser,
    handleShowConfirmPassword,
    isVisibleConfirmPassword,
    watchPassword,
  };
};

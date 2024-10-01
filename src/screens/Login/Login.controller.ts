import { useState } from 'react';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import useAuthStore from '@/src/store/auth/auth.store';

import { FormRequiredLogin, IUseLoginControllerProps } from './Login.types';

export const useLoginController = (): IUseLoginControllerProps => {
  const { authLogin } = useAuthStore();

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
  });

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormRequiredLogin>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmitLogin = async (): Promise<void> => {
    const { email, password } = getValues();

    authLogin({ email: email, password: password });
  };

  return {
    isValid,
    errors,
    control,
    isVisiblePassword,
    handleShowPassword,
    handleSubmit,
    onSubmitLogin,
  };
};

import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import useAuthStore from '@/src/store/auth/auth.store';

import { FormRequiredLogin } from './Login.types';

export const useLoginController = () => {
  const { login } = useAuthStore();

  const schema = yup.object().shape({
    email: yup.string().email().required('O e-mail é obrigatório'),
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

    login({ email: email, password: password });
  };

  return {
    isValid,
    errors,
    handleSubmit,
    control,
    onSubmitLogin,
  };
};

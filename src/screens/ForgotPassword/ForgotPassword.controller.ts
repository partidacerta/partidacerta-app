import { useForm } from 'react-hook-form';

import { router } from 'expo-router';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import useAuthStore from '@/src/store/auth/auth.store';

import {
  FormRequiredForgotPassword,
  IUseForgotPasswordControllerProps,
} from './ForgotPassword.types';

export const useForgotPasswordController =
  (): IUseForgotPasswordControllerProps => {
    const { resetPassword } = useAuthStore();

    const schema = yup.object().shape({
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
    });

    const {
      handleSubmit,
      control,
      getValues,
      formState: { errors, isValid },
    } = useForm<FormRequiredForgotPassword>({
      defaultValues: {
        email: '',
      },
      mode: 'onChange',
      resolver: yupResolver(schema),
    });

    const onSubmitForgotPassword = async (): Promise<void> => {
      const { email } = getValues();

      resetPassword({ email: email });
    };

    return {
      isValid,
      errors,
      control,
      handleSubmit,
      onSubmitForgotPassword,
    };
  };

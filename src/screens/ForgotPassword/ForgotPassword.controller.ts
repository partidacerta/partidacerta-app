import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  FormRequiredForgotPassword,
  IUseForgotPasswordControllerProps,
} from './ForgotPassword.types';
import { router } from 'expo-router';

export const useForgotPasswordController =
  (): IUseForgotPasswordControllerProps => {
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

      // forgotPassword({ email: email });
      router.push('./VerifyCode.stack');
    };

    return {
      isValid,
      errors,
      control,
      handleSubmit,
      onSubmitForgotPassword,
    };
  };

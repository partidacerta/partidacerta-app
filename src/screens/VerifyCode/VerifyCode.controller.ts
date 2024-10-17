import { useForm } from 'react-hook-form';

import { router } from 'expo-router';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import useAuthStore from '@/src/store/auth/auth.store';

import {
  FormRequiredVerifyCode,
  IUseVerifyCodeControllerProps,
} from './VerifyCode.types';

export const useVerifyCodeController = (): IUseVerifyCodeControllerProps => {
  const { setCodeResetPassword, resetPassword, isLoading, resetPasswordData } =
    useAuthStore();

  const schema = yup.object().shape({
    code: yup
      .string()
      .length(6, 'O código deve ter 6 dígitos')
      .required('O código é obrigatório'),
  });

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormRequiredVerifyCode>({
    defaultValues: {
      code: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmitVerifyCode = async (): Promise<void> => {
    const { code } = getValues();

    setCodeResetPassword({ resetCode: code });

    router.push('./NewPassword.stack');
  };

  const handleResendResetCode = () => {
    resetPassword({
      email: String(resetPasswordData.email),
      isResendCode: true,
    });
  };

  return {
    isValid,
    errors,
    control,
    handleSubmit,
    onSubmitVerifyCode,
    handleResendResetCode,
    isLoading,
  };
};

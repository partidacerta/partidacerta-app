import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  FormRequiredNewPassword,
  IUseNewPasswordControllerProps,
} from './NewPassword.types';
import { router } from 'expo-router';

export const useNewPasswordController = (): IUseNewPasswordControllerProps => {
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
    password: yup.string().required('A senha é obrigatória'),
    confirmPassword: yup
      .string()
      .required('A confirmação de senha é obrigatória')
      .oneOf([yup.ref('password')], 'A senha e a confirmação devem ser iguais'),
  });

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormRequiredNewPassword>({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmitNewPassword = async (): Promise<void> => {
    const { password, confirmPassword } = getValues();

    // newPassword({ password: password, confirmPassword: confirmPassword });
    router.push('./Login.stack');
  };

  return {
    isValid,
    errors,
    control,
    isVisiblePassword,
    isVisibleConfirmPassword,
    handleShowPassword,
    handleShowConfirmPassword,
    handleSubmit,
    onSubmitNewPassword,
  };
};

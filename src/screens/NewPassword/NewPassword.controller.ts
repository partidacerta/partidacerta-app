import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import useAuthStore from '@/src/store/auth/auth.store';

import {
  FormRequiredNewPassword,
  IUseNewPasswordControllerProps,
} from './NewPassword.types';

export const useNewPasswordController = (): IUseNewPasswordControllerProps => {
  const { resetPasswordFinalStep, isLoading } = useAuthStore();

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

  const watchPassword = useWatch({
    control,
    name: 'password',
  });

  const onSubmitNewPassword = async (): Promise<void> => {
    const { confirmPassword } = getValues();

    resetPasswordFinalStep({ newPassword: confirmPassword });
  };

  const handleFormIsValid = () => {
    const { password, confirmPassword } = getValues();

    if (password === confirmPassword && password.length === 8 && isValid) {
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      return hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
    }

    return false;
  };

  const dataValidateCharacteres = [
    {
      type: 'number',
      label: 'Número',
    },
    {
      type: 'uppercase',
      label: 'Letra maiúscula',
    },
    {
      type: 'lowercase',
      label: 'Letra minúscula',
    },
    {
      type: 'specialChar',
      label: 'Caractere especial',
    },
  ];

  return {
    handleFormIsValid,
    errors,
    control,
    isVisiblePassword,
    isVisibleConfirmPassword,
    handleShowPassword,
    handleShowConfirmPassword,
    handleSubmit,
    onSubmitNewPassword,
    dataValidateCharacteres,
    watchPassword,
    isLoading,
  };
};

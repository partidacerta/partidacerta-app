import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { router } from 'expo-router';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import useSignInStore from '@/src/store/signIn/signIn.store';

import {
  FormRequiredRegisterUser,
  IUseRegisterUserControllerProps,
} from './RegisterUser.types';

export const useRegisteUserController = (): IUseRegisterUserControllerProps => {
  const { setUserDataSignIn } = useSignInStore();

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
    const { email, password } = getValues();

    setUserDataSignIn({
      email,
      password,
    });

    router.push('/PrivacyPolicies.stack');
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
    handleShowPassword,
    handleSubmit,
    onSubmitRegisterUser,
    handleShowConfirmPassword,
    isVisibleConfirmPassword,
    watchPassword,
    dataValidateCharacteres,
  };
};

import { useForm } from 'react-hook-form';

import { router } from 'expo-router';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import useAuthStore from '@/src/store/auth/auth.store';

import {
  FormRequiredRegisterUserInfo,
  IUseRegisterUserInfoControllerProps,
} from './RegisterUserInfo.types';

export const useRegisterUserInfoController =
  (): IUseRegisterUserInfoControllerProps => {
    const { setUserDataSignIn, authRegister } = useAuthStore();

    const schema = yup.object().shape({
      name: yup.string().required('O nome é obrigatório'),
      nickname: yup.string().required('O nickname é obrigatório'),
    });

    const {
      handleSubmit,
      control,
      getValues,
      formState: { errors, isValid },
    } = useForm<FormRequiredRegisterUserInfo>({
      defaultValues: {
        name: '',
        nickname: '',
      },
      mode: 'onChange',
      resolver: yupResolver(schema),
    });

    const onSubmitRegisterUserInfo = async (): Promise<void> => {
      const { name, nickname } = getValues();

      setUserDataSignIn({
        name,
        nickname,
      });

      authRegister();

      router.push('/(home)');
    };

    return {
      isValid,
      errors,
      control,
      handleSubmit,
      onSubmitRegisterUserInfo,
    };
  };

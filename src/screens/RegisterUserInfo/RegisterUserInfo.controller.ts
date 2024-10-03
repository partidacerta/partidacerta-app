import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import useAuthStore from '@/src/store/auth/auth.store';

import {
  FormRequiredRegisterUserInfo,
  IUseRegisterUserInfoControllerProps,
} from './RegisterUserInfo.types';

export const useRegisterUserInfoController =
  (): IUseRegisterUserInfoControllerProps => {
    const {
      setUserDataSignIn,
      authRegister,
      verifyNickname,
      isNicknameRegistered,
      isLoading,
    } = useAuthStore();

    const [debounceTimeout, setDebounceTimeout] =
      useState<NodeJS.Timeout | null>(null);

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

    const shouldDisabledButton = !isValid || isNicknameRegistered;

    const watchNickname = useWatch({
      control,
      name: 'nickname',
    });

    const onSubmitRegisterUserInfo = async (): Promise<void> => {
      const { name, nickname } = getValues();

      setUserDataSignIn({
        name,
        nickname,
      });

      authRegister();
    };

    useEffect(() => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }

      if (watchNickname) {
        const timeout = setTimeout(async () => {
          verifyNickname({ nickname: watchNickname });
        }, 2000);

        setDebounceTimeout(timeout);
      }

      return () => {
        if (debounceTimeout) {
          clearTimeout(debounceTimeout);
        }
      };
    }, [watchNickname]);

    return {
      shouldDisabledButton,
      errors,
      control,
      handleSubmit,
      onSubmitRegisterUserInfo,
      isNicknameRegistered,
      isLoading,
    };
  };

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import useAuthStore from '@/src/store/auth/auth.store';
import useUserStore from '@/src/store/user/user.store';

import { IUseDisableAccountProps } from './DisableAccount.types';

export const useDisableAccountController = (): IUseDisableAccountProps => {
  const { userAuth } = useAuthStore();
  const { isLoading } = useUserStore();

  const [isModalVisible, setModalVisible] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);

  const handleShowPassword = () => {
    setIsVisiblePassword(prev => !prev);
  };

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  const schema = yup.object().shape({
    password: yup.string().required('A senha é obrigatória'),
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    defaultValues: { password: '' },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const handleDisableAccount = () => {
    const { password } = getValues();
    if (userAuth?.id && password) {
      useUserStore.getState().deleteUserAccount(userAuth.id, password);
    }
    setModalVisible(false);
  };

  return {
    isLoading,
    isModalVisible,
    isVisiblePassword,
    handleShowPassword,
    handleOpenModal,
    handleCloseModal,
    handleDisableAccount: handleSubmit(handleDisableAccount),
    control,
    errors,
    isValid,
  };
};

import { BackHandler } from 'react-native';

import { router, useFocusEffect } from 'expo-router';

import useAuthStore from '@/src/store/auth/auth.store';

import { IUseHomeControllerProps } from './Home.types';
import { useState } from 'react';

export const useHomeController = (): IUseHomeControllerProps => {
  const { logout } = useAuthStore();

  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  const handleLogout = () => {
    logout();
    setModalVisible(false);
    router.replace('/Login.stack');
  };

  useFocusEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  });

  return {
    handleLogout,
    isModalVisible,
    handleOpenModal,
    handleCloseModal,
  };
};

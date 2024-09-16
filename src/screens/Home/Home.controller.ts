import { BackHandler } from 'react-native';

import { router, useFocusEffect } from 'expo-router';

import useAuthStore from '@/src/store/auth/auth.store';

import { IUseHomeControllerProps } from './Home.types';

export const useHomeController = (): IUseHomeControllerProps => {
  const { logout } = useAuthStore();

  const handleLogout = () => {
    router.replace('/Login.stack');
    logout();
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

  return { handleLogout };
};

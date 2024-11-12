import { useState } from 'react';

import { router } from 'expo-router';

import useAuthStore from '@/src/store/auth/auth.store';

import { IUseGeneralSettingsProps, MenuItem } from './GeneralSettings.types';

export const useGeneralSettingsController = (): IUseGeneralSettingsProps => {
  const { logout } = useAuthStore();

  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  const handleLogout = () => {
    logout();
    setModalVisible(false);
    router.replace('/Login.stack');
  };

  const menuItems: MenuItem[] = [
    {
      iconName: 'person-outline',
      label: 'Conta',
      action: () => router.push('/AccountSettings.stack'),
    },
    {
      iconName: 'key-outline',
      label: 'Alterar senha',
    },
    {
      iconName: 'remove-circle-outline',
      label: 'Desativar conta',
      action: () => router.push('/DisableAccount.stack'),
    },
    {
      iconName: 'document-text-outline',
      label: 'Política de privacidade',
    },
    {
      iconName: 'log-out-outline',
      label: 'Logout',
      action: handleOpenModal,
    },
  ];

  return {
    handleLogout,
    isModalVisible,
    handleCloseModal,
    menuItems,
  };
};

import { useEffect, useState } from 'react';

import useUserStore from '@/src/store/user/user.store';
import useAuthStore from '@/src/store/auth/auth.store';

import { states } from '@/src/constants/States';
import { formatPhone } from '@/src/utils/formatPhone';
import { IUseAccountSettingsProps } from './AccountSettings.types';

export const useAccountSettingsController = (): IUseAccountSettingsProps => {
  const { userData, isLoading, getUserById, updateUser } = useUserStore();
  const { userAuth } = useAuthStore();

  const [formData, setFormData] = useState({
    name: userData?.name || '',
    nickname: userData?.nickname || '',
    email: userData?.email || '',
    birthdate: userData?.birthdate || '',
    phone: userData?.phone || '',
    uf: userData?.uf || '',
    city: userData?.city || '',
  });

  useEffect(() => {
    if (userAuth?.id) {
      getUserById(userAuth.id);
    }
  }, [userAuth?.id, getUserById]);

  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name,
        nickname: userData.nickname,
        email: userData.email,
        birthdate: userData.birthdate ?? '',
        phone: userData.phone,
        uf: userData.uf,
        city: userData.city,
      });
    }
  }, [userData]);

  const handleUpdate = async () => {
    if (userAuth?.id) {
      await updateUser(userAuth.id, formData);
    }
  };

  return {
    formData,
    setFormData,
    isLoading,
    states,
    formatPhone,
    handleUpdate,
  };
};

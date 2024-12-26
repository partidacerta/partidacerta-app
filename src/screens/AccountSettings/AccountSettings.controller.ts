import { useEffect } from 'react';

import useUserStore from '@/src/store/user/user.store';
import useAuthStore from '@/src/store/auth/auth.store';

import { states } from '@/src/constants/States';
import { formatPhone } from '@/src/utils/formatPhone';

export const useAccountSettingsController = () => {
  const { userData, isLoading, getUserById } = useUserStore();
  const { userAuth } = useAuthStore();

  useEffect(() => {
    if (userAuth?.id) {
      getUserById(userAuth.id);
    }
  }, [userAuth?.id, getUserById]);

  return {
    userData,
    isLoading,
    states,
    formatPhone,
  };
};

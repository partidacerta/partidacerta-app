import { useEffect } from 'react';

import { router } from 'expo-router';

import useAuthStore from '@/src/store/auth/auth.store';
import usePlayerStore from '@/src/store/player/player.store';

export const useUserProfileController = () => {
  const { playerData, getPlayerById, isLoading } = usePlayerStore();
  const { userAuth } = useAuthStore();

  const handleNavigateEditProfile = () => {
    router.push('/EditProfile.stack');
  };

  useEffect(() => {
    if (userAuth?.playerInfo?.id) {
      getPlayerById(userAuth?.playerInfo?.id);
    }
  }, [userAuth?.playerInfo?.id]);

  return {
    playerData,
    isLoading,
    handleNavigateEditProfile,
  };
};

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
    if (userAuth?.playerId) {
      getPlayerById(userAuth.playerId);
    }
  }, [userAuth?.playerId]);

  return {
    playerData,
    isLoading,
    handleNavigateEditProfile,
  };
};

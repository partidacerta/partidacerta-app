import useAuthStore from '@/src/store/auth/auth.store';
import usePlayerStore from '@/src/store/player/player.store';
import { useEffect } from 'react';

export const useUserProfileController = () => {
  const { playerData, getPlayerById, isLoading } = usePlayerStore();
  const { userAuth } = useAuthStore();

  useEffect(() => {
    if (userAuth?.playerId) {
      getPlayerById(userAuth.playerId);
    }
  }, [userAuth?.playerId]);

  return {
    playerData,
    isLoading,
  };
};

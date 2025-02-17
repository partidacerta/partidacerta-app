import { IPlayer } from '@/src/services/player/player.dto';

export interface IUseUserProfileControllerProps {
  playerData: IPlayer | undefined;
  isLoading: boolean;
  handleNavigateEditProfile: () => void;
}

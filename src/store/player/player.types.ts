import { IPlayerDTO } from '@/src/services/player/player.dto';

export type PlayerStoreProps = {
  playerData?: IPlayerDTO;
  isLoading: boolean;
  getPlayerById: (playerId: string) => void;
  makeAsync: <T>(props: {
    handle: () => Promise<T>;
    onError?: (error: unknown) => void;
    onFinally?: () => void;
  }) => Promise<void>;
};

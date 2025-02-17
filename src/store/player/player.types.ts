import { IPlayer, IPlayerDTO } from '@/src/services/player/player.dto';

export type PlayerStoreProps = {
  playerData?: IPlayer;
  players?: IPlayerDTO;
  isLoading: boolean;
  getPlayerById: (playerId: string) => void;
  getPlayers: (name?: string, nickname?: string) => Promise<void>;
  makeAsync: <T>(props: {
    handle: () => Promise<T>;
    onError?: (error: unknown) => void;
    onFinally?: () => void;
  }) => Promise<void>;
};

import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.darkBlue};
`;

export const ContainerImage = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 96px;
  height: 96px;
  margin-bottom: 10px;
  border-radius: 100px;
`;

export const ContainerInfo = styled.View`
  padding: 0 20px;
`;

export const TeamInfo = styled.View`
  padding: 10px;
  margin-top: 16px;
  border-radius: 12px;
  background-color: ${Colors.darkBlue800};
`;

export const ContainerSport = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Sport = styled.View`
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: ${Colors.darkOverlay};
`;

export const TextSport = styled.View``;

export const BoxTeam = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 6px;
  margin-top: 10px;
`;

export const Location = styled.View`
  align-items: start;
`;

export const Group = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

export const PlayersActive = styled.View`
  align-items: start;
`;

export const Stats = styled.View`
  padding: 0 20px;
  margin-top: 20px;
`;

export const ContainerCards = styled.View`
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
`;

export const CardStats = styled.View`
  width: 30%;
  height: 96px;
  padding: 10px;
  border-radius: 22px;
  background-color: ${Colors.darkBlue800};
`;

export const Matches = styled.View`
  align-items: flex-start;
  padding-left: 20px;
  margin-top: 20px;
`;

export const ViewAll = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-right: 20px;
`;

export const CardMatches = styled.View`
  width: 250px;
  height: 140px;
  padding: 10px;
  margin-top: 4px;
  margin-right: 10px;
  border-radius: 12px;
  background-color: ${Colors.darkBlue800};
`;

export const Players = styled.View`
  padding: 0 20px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const ContainerPlayers = styled.View`
  flex-direction: row;
  padding: 10px 0 6px 10px;
  margin-top: 4px;
  border-radius: 12px;
  background-color: ${Colors.darkBlue800};
`;

export const ContentPlayer = styled.View`
  flex-direction: row;
  margin-right: 14px;
`;

export const PlayerItem = styled.View`
  align-items: center;
  gap: 4px;
`;

export const PlayerImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 100px;
`;

export const PlayerInfo = styled.View`
  align-items: center;
`;

export const Button = styled.View`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const FloatingButton = styled.View`
  position: absolute;
  bottom: 0;
  right: 20px;
`;

export const Modal = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const ModalTitle = styled.View`
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const ModalButtons = styled.View`
  flex-direction: row;
  gap: 20px;
`;

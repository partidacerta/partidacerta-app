import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

export const Container = styled.View`
  justify-content: center;
`;

export const ContainerPresident = styled.View`
  margin-bottom: 40px;
`;

export const BoxPresident = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  background-color: ${Colors.darkBlue700};
`;

export const InfoPresident = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 100px;
`;

export const NamePresident = styled.View``;

export const ContainerPlayers = styled.View`
  padding: 10px 16px 30px 16px;
  margin-top: 30px;
  border-radius: 12px;
  background-color: ${Colors.darkBlue800};
`;

export const BoxPlayers = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  margin-top: 10px;
  border-radius: 12px;
  background-color: ${Colors.darkBlue700};
`;

export const LeftSide = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const Position = styled.View`
  padding: 10px;
  border-radius: 10px;
  background-color: ${Colors.darkBlue};
`;

export const RightSide = styled.View``;

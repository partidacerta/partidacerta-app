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

export const ImagePlayer = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 100px;
`;

export const RightSide = styled.View``;

export const ModalContent = styled.View``;

export const ModalHeader = styled.View`
  flex-direction: row;
  gap: 6px;
  align-items: center;
`;

export const ModalPlayers = styled.View`
  gap: 10px;
  height: 270px;
`;

export const BoxPlayer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 12px;
  border-radius: 12px;
  background-color: ${Colors.darkBlue700};
  align-items: center;
`;

export const InfoPlayer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex: 1;
`;

export const ModalFooter = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

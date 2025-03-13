import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.darkBlue};
`;

export const Search = styled.View`
  flex-direction: row;
  gap: 6px;
  align-items: center;
  padding: 0 20px;
`;

export const ContainerTeams = styled.View`
  padding: 0 20px;
  margin-bottom: 180px;
`;

export const TeamCard = styled.View`
  padding: 14px 20px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: ${Colors.darkBlue800};
`;

export const ContainerCard = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const TeamImage = styled.Image`
  width: 52px;
  height: 52px;
  border-radius: 100px;
`;

export const TeamInfo = styled.View`
  align-items: start;
`;

export const Box = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

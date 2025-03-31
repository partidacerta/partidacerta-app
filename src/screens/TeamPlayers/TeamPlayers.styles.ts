import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

export const Container = styled.View`
  padding-bottom: 40px;
`;

export const PlayerCard = styled.View`
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

export const PlayerImage = styled.Image`
  width: 52px;
  height: 52px;
  border-radius: 100px;
`;

export const PlayerInfo = styled.View``;

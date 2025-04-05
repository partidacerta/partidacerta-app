import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

export const ContainerSport = styled.View`
  padding-left: 20px;
  margin-bottom: 16px;
`;

export const ContainerBox = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-right: 20px;
`;

export const Sport = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border-radius: 50%;
  background-color: ${Colors.darkOverlay};
`;

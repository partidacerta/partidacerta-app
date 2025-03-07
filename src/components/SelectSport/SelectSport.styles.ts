import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

import { ThemedText } from '../ThemedText/ThemedText';

export const ContainerSport = styled.View``;

export const ContainerBox = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 12px 6px;
  border-radius: 12px;
  background-color: ${Colors.darkOpacity};
`;

export const Sport = styled.View`
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: ${Colors.darkOverlay};
`;

export const Box = styled.View`
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ContainerCheck = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 22px;
  right: 4px;
  border-radius: 50%;
  padding: 2px;
  background-color: ${Colors.green};
`;

export const MessageError = styled(ThemedText)`
  color: ${Colors.red};
  margin-top: 4px;
  padding-left: 18px;
  min-height: 24px;
`;

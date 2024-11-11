import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.View`
  height: 0.5px;
  width: 100%;
  background-color: ${Colors.gray500};
`;

export const ModalContent = styled.View`
  align-items: center;
  gap: 30px;
  width: 100%;
  margin-top: 24px;
`;

export const ButtonModal = styled.View`
  width: 100%;
`;

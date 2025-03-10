import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

interface ModalizeProps {
  backgroundColor: string;
  borderRadius: string;
}

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.View<ModalizeProps>`
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

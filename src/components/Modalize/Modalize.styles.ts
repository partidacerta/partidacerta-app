import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.View`
  border-radius: 20px;
  background-color: ${Colors.gray800};
`;

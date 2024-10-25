import styled from 'styled-components/native';
import { Colors } from '@/src/constants/Colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.View`
  align-items: center;
  width: 80%;
  padding: 20px;
  border-width: 1px;
  border-radius: 20px;
  border-color: ${Colors.white};
  background-color: ${Colors.darkBlue};
`;

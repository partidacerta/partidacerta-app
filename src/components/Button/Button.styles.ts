import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

export const ButtonPrimary = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background-color: ${Colors.blue};
  margin: 8px auto;
`;

export const ButtonSecondary = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border: 1px solid ${Colors.blue};
  margin: 8px auto;
`;

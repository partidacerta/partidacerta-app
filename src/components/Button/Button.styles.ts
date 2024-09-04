import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

export const ButtonPrimary = styled.TouchableOpacity`
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${Colors.orange};
  margin: 8px auto;
`;

export const ButtonSecondary = styled.TouchableOpacity`
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 2px solid ${Colors.orange};
  margin: 8px auto;
`;

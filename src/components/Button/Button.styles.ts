import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

interface ButtonProps {
  disabled?: boolean;
}

export const ButtonPrimary = styled.TouchableOpacity<ButtonProps>`
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background-color: ${Colors.blue};
  margin: 12px auto;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const ButtonSecondary = styled.TouchableOpacity<ButtonProps>`
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border: 1px solid ${Colors.blue};
  margin: 12px auto;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const ButtonLink = styled.TouchableOpacity<ButtonProps>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

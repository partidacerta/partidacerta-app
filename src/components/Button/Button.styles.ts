import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

interface ButtonProps {
  disabled?: boolean;
}

export const ButtonPrimary = styled.TouchableOpacity<ButtonProps>`
  height: 50px;
  width: 100%;
  flex-direction: row;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border: 1px solid ${Colors.blue};
  margin: 12px auto;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const ButtonIcon = styled.TouchableOpacity<ButtonProps>`
  height: 48px;
  width: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${Colors.darkOpacity};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const ButtonLink = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

import { Platform, Animated } from 'react-native';

import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

interface ToastProps {
  type: string;
}

function getIconBackgroundColor(type: string) {
  return type === 'success'
    ? Colors.green
    : type === 'error'
    ? Colors.red
    : type === 'info'
    ? Colors.yellow600
    : Colors.gray700;
}

export const Container = styled(Animated.View)<ToastProps>`
  position: absolute;
  z-index: 10;
  top: ${Platform.OS === 'ios' ? 65 : 40}px;
  left: 10px;
  border-radius: 8px;
  height: 56px;
  width: 95%;
  justify-content: center;
  padding: 0 14px;
  background-color: ${Colors.white};
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text<ToastProps>`
  color: black;
  font-size: 16px;
  font-weight: 400;
  margin-left: 8px;
`;

export const ContainerMesssage = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.View<ToastProps>`
  justify-content: center;
  align-items: center;
  padding: 4px;
  margin-right: 4px;
  border-radius: 8px;
  background-color: ${({ type }) => getIconBackgroundColor(type)};
`;

export const Message = styled.Text<ToastProps>`
  color: black;
  font-size: 14px;
  font-weight: 400;
  margin-left: 8px;
`;

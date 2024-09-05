import { Platform, Animated } from 'react-native';

import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

interface ToastProps {
  type: string;
}

function getBackgroundColorToast(type: string) {
  return type === 'success'
    ? Colors.lightGreen
    : type === 'error'
    ? Colors.lightRed
    : Colors.gray100;
}

function getColorTextToast(type: string) {
  return type === 'success'
    ? Colors.green
    : type === 'error'
    ? Colors.red
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
  padding: 0 16px;
  background-color: ${({ type }) => getBackgroundColorToast(type)};
`;

export const ContainerMesssage = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Message = styled.Text<ToastProps>`
  color: black;
  font-size: 16px;
  font-weight: 400;
  margin-left: 8px;
  color: ${({ type }) => getColorTextToast(type)};
`;

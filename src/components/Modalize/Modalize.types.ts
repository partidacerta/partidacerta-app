import { ReactNode } from 'react';
import { Animated } from 'react-native';

export interface ModalizeProps {
  visible: boolean;
  onClose: () => void;
  children?: ReactNode;
  backgroundColor?: string;
  borderRadius?: number;
}

export interface IUseModalizeControllerProps {
  translateY: Animated.Value;
}

export interface ModalizeControllerProps {
  visible: boolean;
}

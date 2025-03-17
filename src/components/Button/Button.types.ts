import { StyleProp, ViewStyle, TouchableOpacityProps } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export interface ButtonProps extends TouchableOpacityProps {
  type?: 'primary' | 'secondary' | 'link';
  text?: string;
  style?: StyleProp<ViewStyle>;
  lightColor?: string;
  darkColor?: string;
  disabled?: boolean;
  icon?: keyof typeof Ionicons.glyphMap;
  sizeIcon?: number;
  colorIcon?: string;
  borderRadius?: string | number;
  textColor?: string;
}

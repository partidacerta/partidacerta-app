import { StyleProp, ViewStyle, TouchableOpacityProps } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export interface ButtonProps extends TouchableOpacityProps {
  type?: 'primary' | 'secondary' | 'link' | 'icon';
  text?: string;
  style?: StyleProp<ViewStyle>;
  lightColor?: string;
  darkColor?: string;
  disabled?: boolean;
  icon?: keyof typeof Ionicons.glyphMap;
  sizeIcon?: number;
  colorIcon?: string;
}

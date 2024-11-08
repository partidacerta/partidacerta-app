import { Ionicons } from '@expo/vector-icons';
import { StyleProp, ViewStyle, TouchableOpacityProps } from 'react-native';

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
}

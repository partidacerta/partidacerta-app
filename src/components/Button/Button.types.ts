import { StyleProp, ViewStyle, TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  type?: 'primary' | 'secondary' | 'link';
  text?: string;
  style?: StyleProp<ViewStyle>;
  lightColor?: string;
  darkColor?: string;
}

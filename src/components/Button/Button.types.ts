import { StyleProp, ViewStyle } from 'react-native';

export type ButtonProps = {
  type?: 'primary' | 'secondary' | 'link';
  text: string;
  style?: StyleProp<ViewStyle>;
  lightColor?: string;
  darkColor?: string;
  onPress?: () => void;
};

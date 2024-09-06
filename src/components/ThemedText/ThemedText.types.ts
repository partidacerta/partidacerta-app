import { type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  size?: number;
  type?: 'default' | 'title' | 'bold' | 'semiBold' | 'link';
};

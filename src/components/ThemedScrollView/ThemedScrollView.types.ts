import { type ScrollViewProps } from 'react-native';

export type ThemedScrollViewProps = ScrollViewProps & {
  lightColor?: string;
  darkColor?: string;
};

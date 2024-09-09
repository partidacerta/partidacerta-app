import { type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  justifyCenter?: boolean;
  alignCenter?: boolean;
};

import { StyleProp, ViewStyle } from 'react-native';

export type ButtonProps = {
  type?: 'primary' | 'secondary';
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

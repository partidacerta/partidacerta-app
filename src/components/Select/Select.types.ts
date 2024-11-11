import { StyleProp, ViewStyle } from 'react-native';

export interface SelectProps {
  items: { label: string; value: string }[];
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onClose?: () => void;
  value?: string;
  error?: string | undefined;
}

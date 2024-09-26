import { ImageStyle, StyleProp, ViewStyle } from 'react-native';

import { SvgsTypes } from '.';

export interface SvgsProps {
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  icon?: string;
  width?: string;
  height?: string;
  color?: string;
  fill?: string;
  accessibilityLabel?: string;
}

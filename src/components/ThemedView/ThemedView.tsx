import { useThemeColor } from '@/src/hooks/useThemeColor';

import * as S from './ThemedView.styles';
import { ThemedViewProps } from './ThemedView.types';

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...props
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return <S.Container style={[{ backgroundColor }, style]} {...props} />;
}

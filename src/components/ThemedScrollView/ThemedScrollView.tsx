import { useThemeColor } from '@/src/hooks/useThemeColor';

import * as S from './ThemedScrollView.styles';
import { ThemedScrollViewProps } from './ThemedScrollView.types';

export function ThemedScrollView({
  style,
  lightColor,
  darkColor,
  ...props
}: ThemedScrollViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return <S.Container style={[{ backgroundColor }, style]} {...props} />;
}

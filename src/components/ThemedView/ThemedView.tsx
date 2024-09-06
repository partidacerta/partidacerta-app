import { useThemeColor } from '@/src/hooks/useThemeColor';

import * as S from './ThemedView.styles';
import { ThemedViewProps } from './ThemedView.types';

export function ThemedView({
  style,
  lightColor,
  darkColor,
  justifyContent = false,
  alignItems = false,
  ...props
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return (
    <S.Container
      justifyContent={justifyContent}
      alignItems={alignItems}
      style={[{ backgroundColor }, style]}
      {...props}
    />
  );
}

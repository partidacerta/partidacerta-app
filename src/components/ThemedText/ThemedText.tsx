import React from 'react';

import { useThemeColor } from '@/src/hooks/useThemeColor';

import * as S from './ThemedText.styles';
import { ThemedTextProps } from './ThemedText.types';

export function ThemedText({
  style,
  lightColor,
  darkColor,
  textAlign,
  width,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const StyledTextComponent = (() => {
    switch (type) {
      case 'title':
        return S.Title;
      case 'bold':
        return S.Bold;
      case 'semiBold':
        return S.SemiBold;
      default:
        return S.Default;
    }
  })();

  return (
    <StyledTextComponent
      style={[{ color }, style]}
      textAlign={textAlign}
      width={width}
      {...rest}
    />
  );
}

import React from 'react';

import { useThemeColor } from '@/src/hooks/useThemeColor';

import * as S from './ThemedText.styles';
import { ThemedTextProps } from './ThemedText.types';

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const StyledTextComponent = (() => {
    switch (type) {
      case 'title':
        return S.Title;
      case 'semiBold':
        return S.SemiBold;
      case 'subtitle':
        return S.Subtitle;
      case 'link':
        return S.Link;
      default:
        return S.Default;
    }
  })();

  return <StyledTextComponent style={style} {...rest} />;
}

import { Colors } from '@/src/constants/Colors';
import { useThemeColor } from '@/src/hooks/useThemeColor';

import { ThemedText } from '../ThemedText/ThemedText';
import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

export function Button({
  type = 'primary',
  text,
  style,
  lightColor,
  darkColor,
  disabled,
  onPress,
  ...props
}: ButtonProps) {
  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'borderColor'
  );

  const RenderStyledButton = () => {
    switch (type) {
      case 'primary':
        return (
          <S.ButtonPrimary
            {...props}
            style={style}
            disabled={disabled}
            onPress={onPress}
          >
            <ThemedText size={16} type="bold" style={{ color: Colors.white }}>
              {text}
            </ThemedText>
          </S.ButtonPrimary>
        );
      case 'link':
        return (
          <S.ButtonLink
            {...props}
            style={style}
            disabled={disabled}
            onPress={onPress}
          >
            <ThemedText size={16} type="bold" style={{ color: Colors.white }}>
              {text}
            </ThemedText>
          </S.ButtonLink>
        );
      default:
        return (
          <S.ButtonSecondary
            {...props}
            style={[{ borderColor }, style]}
            disabled={disabled}
            onPress={onPress}
          >
            <ThemedText size={16} type="bold">
              {text}
            </ThemedText>
          </S.ButtonSecondary>
        );
    }
  };

  return <RenderStyledButton />;
}

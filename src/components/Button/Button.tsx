import { Ionicons } from '@expo/vector-icons';

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
  icon,
  sizeIcon = 20,
  colorIcon = Colors.white,
  borderRadius,
  textColor = Colors.white,
  onPress,
  ...props
}: ButtonProps) {
  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'borderColor'
  );

  const RenderIconButton = () => {
    if (!icon) {
      return null;
    }

    return (
      <Ionicons
        name={icon}
        size={sizeIcon}
        color={colorIcon}
        style={{ marginLeft: text ? 6 : 0 }}
      />
    );
  };

  const RenderStyledButton = () => {
    switch (type) {
      case 'primary':
        return (
          <S.ButtonPrimary
            {...props}
            style={style}
            disabled={disabled}
            borderRadius={borderRadius}
            onPress={onPress}
          >
            <ThemedText size={16} type="bold" style={{ color: textColor }}>
              {text}
            </ThemedText>
            <RenderIconButton />
          </S.ButtonPrimary>
        );
      case 'link':
        return (
          <S.ButtonLink
            {...props}
            style={style}
            disabled={disabled}
            borderRadius={borderRadius}
            onPress={onPress}
          >
            <ThemedText size={16} type="bold" style={{ color: textColor }}>
              {text}
            </ThemedText>
            <RenderIconButton />
          </S.ButtonLink>
        );
      default:
        return (
          <S.ButtonSecondary
            {...props}
            style={[{ borderColor }, style]}
            disabled={disabled}
            borderRadius={borderRadius}
            onPress={onPress}
          >
            <ThemedText size={16} type="bold">
              {text}
            </ThemedText>
            <RenderIconButton />
          </S.ButtonSecondary>
        );
    }
  };

  return <RenderStyledButton />;
}

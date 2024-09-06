import { Colors } from '@/src/constants/Colors';

import { ThemedText } from '../ThemedText/ThemedText';
import * as S from './Button.styles';
import { ButtonProps } from './Button.types';
import { useThemeColor } from '@/src/hooks/useThemeColor';

export function Button({
  type = 'primary',
  text,
  style,
  lightColor,
  darkColor,
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
          <S.ButtonPrimary style={style} {...props} onPress={onPress}>
            <ThemedText type="semiBold" style={{ color: Colors.white }}>
              {text}
            </ThemedText>
          </S.ButtonPrimary>
        );
      default:
        return (
          <S.ButtonSecondary
            style={[{ borderColor }, style]}
            {...props}
            onPress={onPress}
          >
            <ThemedText type="semiBold" style={{ color: Colors.blue }}>
              {text}
            </ThemedText>
          </S.ButtonSecondary>
        );
    }
  };

  return <RenderStyledButton />;
}

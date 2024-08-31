import { Colors } from '@/src/constants/Colors';

import { ThemedText } from '../ThemedText/ThemedText';
import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

export function Button({
  type = 'primary',
  text,
  style,
  onPress,
  ...props
}: ButtonProps) {
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
          <S.ButtonSecondary style={style} {...props} onPress={onPress}>
            <ThemedText type="semiBold" style={{ color: Colors.orange }}>
              {text}
            </ThemedText>
          </S.ButtonSecondary>
        );
    }
  };

  return <RenderStyledButton />;
}

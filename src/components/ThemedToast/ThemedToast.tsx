import { Colors } from '@/src/constants/Colors';
import { useThemedToastController } from './ThemedToast.controller';
import { ThemedToastProps } from './ThemedToast.props';
import * as S from './ThemedToast.styles';
import { Ionicons } from '@expo/vector-icons';

export const ThemedToast = ({
  type,
  message,
  duration,
  closeToast,
}: ThemedToastProps) => {
  const { slideAnimeted, getIconName } = useThemedToastController({
    duration,
    closeToast,
  });

  return (
    <S.Container
      type={type}
      style={{ transform: [{ translateX: slideAnimeted }] }}
    >
      <S.ContainerMesssage>
        <S.IconWrapper type={type}>
          <Ionicons name={getIconName(type)} size={20} color={Colors.white} />
        </S.IconWrapper>
        <S.Message type={type}>{message}</S.Message>
      </S.ContainerMesssage>
    </S.Container>
  );
};

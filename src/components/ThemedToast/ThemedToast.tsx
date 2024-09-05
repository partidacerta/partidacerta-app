import { useThemedToastController } from './ThemedToast.controller';
import { ThemedToastProps } from './ThemedToast.props';
import * as S from './ThemedToast.styles';

export const ThemedToast = ({
  type,
  message,
  duration,
  closeToast,
}: ThemedToastProps) => {
  const { slideAnimeted } = useThemedToastController({ duration, closeToast });

  return (
    <S.Container
      type={type}
      style={{ transform: [{ translateX: slideAnimeted }] }}
    >
      <S.ContainerMesssage>
        <S.Message type={type}>{message}</S.Message>
      </S.ContainerMesssage>
    </S.Container>
  );
};

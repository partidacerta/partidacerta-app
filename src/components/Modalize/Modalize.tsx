import {
  Modal as RNModal,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

import { Colors } from '@/src/constants/Colors';

import { useModalizeController } from './Modalize.controller';
import * as S from './Modalize.styles';
import { ModalizeProps } from './Modalize.types';

export function Modalize({
  visible,
  onClose,
  children,
  backgroundColor = Colors.gray800,
  borderRadius = 20,
}: ModalizeProps) {
  const { translateY } = useModalizeController({ visible });

  return (
    <RNModal transparent visible={visible} animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <S.Container>
          <Animated.View style={{ ...S.Content, transform: [{ translateY }] }}>
            <S.Content
              backgroundColor={backgroundColor}
              borderRadius={borderRadius}
            >
              {children}
            </S.Content>
          </Animated.View>
        </S.Container>
      </TouchableWithoutFeedback>
    </RNModal>
  );
}

export default Modalize;

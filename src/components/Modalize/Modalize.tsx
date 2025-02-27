import { Modal as RNModal, Animated } from 'react-native';

import { useModalizeController } from './Modalize.controller';
import * as S from './Modalize.styles';
import { ModalizeProps } from './Modalize.types';

const Modalize: React.FC<ModalizeProps> = ({ visible, onClose, children }) => {
  const { translateY } = useModalizeController({ visible });

  return (
    <RNModal
      transparent
      visible={visible}
      onRequestClose={onClose}
      animationType="fade"
    >
      <S.Container>
        <Animated.View style={{ ...S.Content, transform: [{ translateY }] }}>
          <S.Content>{children}</S.Content>
        </Animated.View>
      </S.Container>
    </RNModal>
  );
};

export default Modalize;

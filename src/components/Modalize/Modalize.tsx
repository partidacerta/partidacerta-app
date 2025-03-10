import { Modal as RNModal, Animated } from 'react-native';

import { Colors } from '@/src/constants/Colors';

import { useModalizeController } from './Modalize.controller';
import * as S from './Modalize.styles';
import { ModalizeProps } from './Modalize.types';

const Modalize: React.FC<ModalizeProps> = ({
  visible,
  onClose,
  children,
  backgroundColor = Colors.gray800,
  borderRadius = '20px',
}) => {
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
          <S.Content
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
          >
            {children}
          </S.Content>
        </Animated.View>
      </S.Container>
    </RNModal>
  );
};

export default Modalize;

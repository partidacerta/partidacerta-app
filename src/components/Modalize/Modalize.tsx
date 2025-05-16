import React from 'react';
import { Modal as RNModal, Animated, Pressable } from 'react-native';

import { Colors } from '@/src/constants/Colors';
import { useModalizeController } from './Modalize.controller';
import * as S from './Modalize.styles';
import { ModalizeProps } from './Modalize.types';

const Modalize: React.FC<ModalizeProps> = ({
  visible,
  onClose,
  children,
  backgroundColor = Colors.gray800,
  borderRadius = 20,
}) => {
  const { translateY } = useModalizeController({ visible });

  return (
    <RNModal transparent visible={visible} animationType="fade">
      <S.Container>
        <Pressable style={{ flex: 1 }} onPress={onClose} />
        <Animated.View
          style={{
            width: '100%',
            transform: [{ translateY }],
          }}
        >
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

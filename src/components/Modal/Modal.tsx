import React from 'react';
import { Modal as RNModal } from 'react-native';

import * as S from './Modal.styles';
import { ModalProps } from './Modal.types';

const Modal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
  return (
    <RNModal transparent visible={visible} animationType="fade">
      <S.Container>
        <S.Content>{children}</S.Content>
      </S.Container>
    </RNModal>
  );
};

export default Modal;

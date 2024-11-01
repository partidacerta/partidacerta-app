import React from 'react';
import { Modal as RNModal, TouchableWithoutFeedback } from 'react-native';

import * as S from './Modal.styles';
import { ModalProps } from './Modal.types';

const Modal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
  return (
    <RNModal transparent visible={visible} animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <S.Container>
          <TouchableWithoutFeedback>
            <S.Content>{children}</S.Content>
          </TouchableWithoutFeedback>
        </S.Container>
      </TouchableWithoutFeedback>
    </RNModal>
  );
};

export default Modal;

import React from 'react';
import { Modal, ActivityIndicator } from 'react-native';

import { Colors } from '@/src/constants/Colors';

import * as S from './Loading.styles';
import { LoadingProps } from './Loading.types';

export function Loading({ isVisible }: LoadingProps) {
  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <S.ContainerBlurView>
        <ActivityIndicator size="large" color={Colors.white} />
      </S.ContainerBlurView>
    </Modal>
  );
}

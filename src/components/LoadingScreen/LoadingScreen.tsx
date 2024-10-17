import React from 'react';
import { Modal, ActivityIndicator } from 'react-native';

import { Colors } from '@/src/constants/Colors';

import * as S from './LoadingScreen.styles';
import { LoadingScreenProps } from './LoadingScreen.types';

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <Modal visible={isLoading} transparent animationType="fade">
      <S.ContainerBlurView>
        <ActivityIndicator size="large" color={Colors.white} />
      </S.ContainerBlurView>
    </Modal>
  );
}

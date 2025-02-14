import { useEffect } from 'react';
import { Animated } from 'react-native';

import {
  ModalizeControllerProps,
  IUseModalizeControllerProps,
} from './Modalize.types';

export const useModalizeController = ({
  visible,
}: ModalizeControllerProps): IUseModalizeControllerProps => {
  const translateY = new Animated.Value(100);

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: visible ? 0 : 100,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible, translateY]);

  return { translateY };
};

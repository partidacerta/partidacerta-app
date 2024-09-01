/* eslint-disable react-native/no-color-literals */
import React, { useState, useEffect, ReactElement } from 'react';
import { Animated } from 'react-native';

import { ThemedToastProps } from './ThemedToast.props';
import * as S from './ThemedToast.styles';

export const ThemedToast = ({
  type,
  message,
  duration,
  closeToast,
}: ThemedToastProps): ReactElement => {
  const [slideAnim] = useState(new Animated.Value(300));

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(slideAnim, {
        toValue: 600,
        duration: 300,
        useNativeDriver: true,
      }).start();
      closeToast && closeToast(false);
    }, duration ?? 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Container
      style={{
        backgroundColor:
          type === 'success'
            ? '#E3F5E1'
            : type === 'error'
            ? '#FFF3F2'
            : '#E1E1E6',
        transform: [{ translateX: slideAnim }],
      }}
    >
      <S.ContainerMesssage>
        <S.Message
          style={{
            color:
              type === 'success'
                ? '#154C21'
                : type === 'error'
                ? '#E60000'
                : '#29292E',
          }}
        >
          {message}
        </S.Message>
      </S.ContainerMesssage>
    </S.Container>
  );
};

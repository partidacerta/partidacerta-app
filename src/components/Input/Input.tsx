import React from 'react';

import { Colors } from '@/src/constants/Colors';

import { ThemedText } from '../ThemedText/ThemedText';
import * as S from './Input.styles';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({ icon, error, label, ...props }) => {
  return (
    <S.Container>
      <ThemedText type="semiBold" style={{ fontSize: 12 }}>
        {label}
      </ThemedText>
      <S.ContainerInput>
        <S.StyledTextInput placeholderTextColor={Colors.gray300} {...props} />
        {icon && <S.Icon>{icon}</S.Icon>}
      </S.ContainerInput>
      <S.MessageError>{error}</S.MessageError>
    </S.Container>
  );
};

export default Input;

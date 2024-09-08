import React from 'react';

import { Colors } from '@/src/constants/Colors';

import * as S from './Input.styles';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({ icon, error, ...props }) => {
  return (
    <S.Container>
      <S.ContainerInput>
        <S.StyledTextInput placeholderTextColor={Colors.gray300} {...props} />
        {icon && <S.Icon>{icon}</S.Icon>}
      </S.ContainerInput>
      <S.MessageError>{error}</S.MessageError>
    </S.Container>
  );
};

export default Input;

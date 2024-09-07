import React from 'react';

import { Colors } from '@/src/constants/Colors';

import * as S from './Input.styles';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({ icon, error, ...props }) => {
  return (
    <>
      <S.Container>
        <S.StyledTextInput placeholderTextColor={Colors.gray300} {...props} />
        {icon && <S.Icon>{icon}</S.Icon>}
      </S.Container>
      <S.MessageError>{error}</S.MessageError>
    </>
  );
};

export default Input;

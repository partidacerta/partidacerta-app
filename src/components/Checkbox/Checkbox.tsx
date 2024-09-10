import React from 'react';
import * as S from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  value,
  onValueChange,
  error,
  ...props
}) => {
  return (
    <S.Container>
      <S.CheckboxContainer>
        <S.StyledCheckbox
          value={value}
          onValueChange={onValueChange}
          {...props}
        />
        <S.Label>{label}</S.Label>
      </S.CheckboxContainer>
      <S.MessageError>{error}</S.MessageError>
    </S.Container>
  );
};

export default Checkbox;

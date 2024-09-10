import React from 'react';
import * as S from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';
import { Colors } from '@/src/constants/Colors';

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  value,
  onValueChange,
  error,
  isChecked,
  ...props
}) => {
  return (
    <S.Container>
      <S.CheckboxContainer>
        <S.StyledCheckbox
          value={value}
          onValueChange={onValueChange}
          color={isChecked ? Colors.blue : undefined}
          {...props}
        />
        <S.Label>{label}</S.Label>
      </S.CheckboxContainer>
      <S.MessageError>{error}</S.MessageError>
    </S.Container>
  );
};

export default Checkbox;

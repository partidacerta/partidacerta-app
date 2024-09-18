import React from 'react';

import { Colors } from '@/src/constants/Colors';

import { useCheckboxController } from './Checkbox.controller';
import * as S from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  value,
  onValueChange,
  error,
  isChecked,
  ...props
}) => {
  const { handlePressCheckbox } = useCheckboxController({
    onValueChange,
    value,
  });

  return (
    <>
      <S.CheckboxContainer onPress={handlePressCheckbox}>
        <S.CheckboxWrapper isChecked={!!isChecked}>
          <S.StyledCheckbox
            value={value}
            onValueChange={onValueChange}
            color={isChecked ? Colors.blue : undefined}
            {...props}
          />
        </S.CheckboxWrapper>
        <S.Label>{label}</S.Label>
      </S.CheckboxContainer>
      <S.MessageError>{error}</S.MessageError>
    </>
  );
};

export default Checkbox;

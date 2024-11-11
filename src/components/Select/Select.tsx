import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

import * as S from './Select.styles';
import { SelectProps } from './Select.types';

const Select: React.FC<SelectProps> = ({
  items,
  placeholder,
  style,
  onChange,
  onClose,
  disabled = false,
  value,
  error,
}) => {
  const handleChange = (selectedValue: string) => {
    if (onChange) onChange(selectedValue);
  };

  return (
    <S.Container>
      <S.ContainerInput style={style}>
        <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          onValueChange={handleChange}
          value={value}
          placeholder={{
            label: placeholder,
            value: null,
          }}
          items={items.map(i => ({ ...i, key: i.value }))}
          disabled={disabled}
          onClose={onClose}
          style={S.pickerStyle}
        />
      </S.ContainerInput>
      {error && <S.MessageError>{error}</S.MessageError>}
    </S.Container>
  );
};

export default Select;

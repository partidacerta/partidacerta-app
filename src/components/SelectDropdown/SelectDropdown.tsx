import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list';

import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/src/constants/Colors';

import { ThemedText } from '../ThemedText/ThemedText';
import { SelectDropdownProps } from './SelectDropdown.types';

const SelectDropdown = ({
  label,
  data,
  setSelected,
  placeholder = 'Selecione uma opção',
  notFoundText = 'Busca não encontrada...',
  search = false,
  ...props
}: SelectDropdownProps) => {
  return (
    <>
      <ThemedText type="semiBold" style={{ fontSize: 12 }}>
        {label}
      </ThemedText>
      <SelectList
        {...props}
        data={data}
        search={search}
        save="value"
        setSelected={(val: React.SetStateAction<string>) => setSelected(val)}
        defaultOption={props.defaultOption}
        fontFamily="RobotoRegular"
        notFoundText={notFoundText}
        searchPlaceholder=""
        placeholder={placeholder}
        boxStyles={{
          backgroundColor: Colors.darkOpacity,
          borderWidth: 0,
          height: 50,
          borderRadius: 12,
          alignItems: 'center',
        }}
        dropdownStyles={{
          backgroundColor: Colors.darkOpacity,
          borderWidth: 0,
        }}
        inputStyles={{
          color: Colors.white,
          marginRight: 20,
          fontSize: 16,
        }}
        dropdownTextStyles={{
          color: Colors.white,
          fontSize: 16,
          marginBottom: 8,
        }}
        disabledTextStyles={{
          color: Colors.white,
          fontSize: 16,
        }}
        arrowicon={
          <Ionicons name="chevron-down" size={18} color={Colors.white} />
        }
        searchicon={<Ionicons name="search" size={18} color={Colors.white} />}
        closeicon={<Ionicons name="close" size={18} color={Colors.white} />}
      />
    </>
  );
};

export default SelectDropdown;

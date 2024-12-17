import { useState } from 'react';
import { Controller } from 'react-hook-form';

import Input from '@/src/components/Input/Input';
import SelectDropdown from '@/src/components/SelectDropdown/SelectDropdown';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';

import { useEditProfileController } from './EditProfile.controller';
import * as S from './EditProfile.styles';

export default function EditProfileScreen() {
  const { playerData, handleSubmit, control, errors } =
    useEditProfileController();

  const [selected, setSelected] = useState('');

  const data = [
    { key: '1', value: 'Mobiles' },
    { key: '2', value: 'Appliances' },
    { key: '3', value: 'Cameras' },
    { key: '4', value: 'Computers' },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
  ];

  return (
    <ThemedScrollView>
      <S.ContainerImageProfile>
        <S.ProfileImage source={{ uri: playerData?.playerImage }} />
      </S.ContainerImageProfile>
      <Controller
        name="name"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            label="Nome"
            placeholder="Nome completo"
            onChangeText={e => onChange(e)}
            value={value}
            error={errors?.name && errors?.name?.message}
            maxLength={50}
          />
        )}
      />
      <Controller
        name="nickname"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            label="Nickname"
            placeholder="Nickname"
            onChangeText={e => onChange(e.trim().replace(/ /g, ''))}
            value={value}
            error={errors?.nickname && errors?.nickname?.message}
            maxLength={50}
            autoCapitalize="none"
          />
        )}
      />
      <SelectDropdown
        data={data}
        setSelected={(val: React.SetStateAction<string>) => setSelected(val)}
        placeholder="Selecione o esporte"
      />
    </ThemedScrollView>
  );
}

import { Controller } from 'react-hook-form';

import { Button } from '@/src/components/Button/Button';
import Input from '@/src/components/Input/Input';
import SelectDropdown from '@/src/components/SelectDropdown/SelectDropdown';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';

import { useEditProfileController } from './EditProfile.controller';
import * as S from './EditProfile.styles';

export default function EditProfileScreen() {
  const {
    playerData,
    handleSubmit,
    control,
    errors,
    genderOptions,
    shouldDisabledButton,
  } = useEditProfileController();

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
      <Controller
        name="gender"
        control={control}
        render={({ field: { value, onChange } }) => (
          <SelectDropdown
            data={genderOptions}
            label="Gênero"
            placeholder="Selecione o gênero"
            setSelected={onChange}
            defaultOption={genderOptions.find(option => option.key === value)}
          />
        )}
      />
      <S.RowInputs>
        <Controller
          name="height"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              label="Altura"
              placeholder="Altura"
              onChangeText={text => {
                // Remove caracteres não numéricos
                let formatText = text.replace(/[^0-9]/g, '');
                // Adiciona a vírgula após o primeiro dígito
                if (formatText.length > 1) {
                  formatText = `${formatText.slice(0, 1)},${formatText.slice(
                    1
                  )}`;
                }
                onChange(formatText);
              }}
              value={value}
              error={errors?.height && errors?.height?.message}
              keyboardType="numeric"
              maxLength={4}
              width="46%"
            />
          )}
        />
        <Controller
          name="shirtNumber"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              label="Número da camisa"
              placeholder="Número da camisa"
              onChangeText={text => onChange(text.replace(/[^0-9]/g, ''))}
              value={value}
              error={errors?.shirtNumber && errors?.shirtNumber?.message}
              keyboardType="numeric"
              maxLength={2}
              width="46%"
            />
          )}
        />
      </S.RowInputs>
      <Button
        text="Salvar"
        disabled={shouldDisabledButton}
        // onPress={handleSubmit(onSubmitForgotPassword)}
      />
    </ThemedScrollView>
  );
}

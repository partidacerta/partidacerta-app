import { Controller } from 'react-hook-form';

import { Button } from '@/src/components/Button/Button';
import Input from '@/src/components/Input/Input';
import SelectDropdown from '@/src/components/SelectDropdown/SelectDropdown';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { GENDER_OPTIONS } from '@/src/constants/Genders';
import { SPORTS_OPTIONS } from '@/src/constants/Sports';
import { SPORTS_MODALITIES_SOCCER_OPTIONS } from '@/src/constants/SportsModalities';

import { useEditProfileController } from './EditProfile.controller';
import * as S from './EditProfile.styles';

export default function EditProfileScreen() {
  const {
    playerData,
    handleSubmit,
    control,
    errors,
    shouldDisabledButton,
    shouldShowSelectModality,
    shouldShowSelectPosition,
    handleOptionsSelectPositions,
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
            data={GENDER_OPTIONS}
            label="Gênero"
            placeholder="Selecione o gênero"
            setSelected={onChange}
            defaultOption={GENDER_OPTIONS.find(option => option.key === value)}
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
      <S.ContainerSports>
        <Controller
          name="sport"
          control={control}
          render={({ field: { value, onChange } }) => (
            <SelectDropdown
              data={SPORTS_OPTIONS}
              label="Esportes de interesse"
              placeholder="Selecione um esporte"
              setSelected={onChange}
              defaultOption={SPORTS_OPTIONS.find(
                option => option.key === value
              )}
            />
          )}
        />
        {shouldShowSelectModality && (
          <Controller
            name="modality"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectDropdown
                data={SPORTS_MODALITIES_SOCCER_OPTIONS}
                label="Modalidade"
                placeholder="Selecione um esporte"
                setSelected={onChange}
                defaultOption={SPORTS_MODALITIES_SOCCER_OPTIONS.find(
                  option => option.key === value
                )}
              />
            )}
          />
        )}
        {shouldShowSelectPosition && (
          <Controller
            name="position"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectDropdown
                data={handleOptionsSelectPositions()}
                label="Posição"
                placeholder="Selecione um esporte"
                setSelected={onChange}
                defaultOption={handleOptionsSelectPositions().find(
                  (option: { key: string }) => option.key === value
                )}
              />
            )}
          />
        )}
      </S.ContainerSports>
      <Button
        text="Salvar"
        disabled={shouldDisabledButton}
        // onPress={handleSubmit(onSubmitForgotPassword)}
        style={{ marginTop: 30, marginBottom: 50 }}
      />
    </ThemedScrollView>
  );
}

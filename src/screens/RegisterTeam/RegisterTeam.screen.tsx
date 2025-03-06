import { Controller } from 'react-hook-form';
import { View } from 'react-native';

import { Button } from '@/src/components/Button/Button';
import Input from '@/src/components/Input/Input';
import ProfileImage from '@/src/components/ProfileImage/ProfileImage';
import SelectDropdown from '@/src/components/SelectDropdown/SelectDropdown';
import SelectSport from '@/src/components/SelectSport/SelectSport';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { Colors } from '@/src/constants/Colors';
import { states } from '@/src/constants/States';

import { useRegisterTeamController } from './RegisterTeam.controller';
import * as S from './RegisterTeam.styles';

export default function RegisterTeamScreen() {
  const {
    logo,
    setLogo,
    errors,
    control,
    isValid,
    onSubmitRegisterTeam,
    modalityOptions,
    handleSportChange,
  } = useRegisterTeamController();

  return (
    <View style={{ flex: 1 }}>
      <ThemedScrollView>
        <S.Container>
          <S.ContainerImage>
            <ProfileImage imageUri={logo} onImageChange={setLogo} />
          </S.ContainerImage>
          <Controller
            name="name"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                label="Nome"
                placeholder="Nome do time"
                onChangeText={e => onChange(e)}
                value={value}
                error={errors?.name && errors?.name?.message}
                maxLength={30}
              />
            )}
          />
          <Controller
            name="sportType"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectSport
                selectedSport={value}
                onSelectSport={sport => {
                  onChange(sport);
                  handleSportChange(sport);
                }}
                error={errors?.sportType?.message}
              />
            )}
          />
          <Controller
            name="modality"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectDropdown
                data={modalityOptions}
                label="Modalidade"
                placeholder="Selecione uma modalidade"
                setSelected={(selected: string) => {
                  const selectedOption = modalityOptions.find(
                    option => option.value === selected
                  );
                  if (selectedOption) {
                    onChange(selectedOption.apiValue);
                  }
                }}
                defaultOption={modalityOptions.find(
                  option => option.key === value
                )}
              />
            )}
          />
          <Controller
            name="uf"
            control={control}
            render={({ field: { value, onChange } }) => (
              <SelectDropdown
                data={states}
                label="UF"
                placeholder="Selecione o estado"
                setSelected={onChange}
                defaultOption={
                  value
                    ? states.find(option => option.value === value)
                    : undefined
                }
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                label="Cidade"
                placeholder="Nome da cidade"
                onChangeText={e => onChange(e)}
                value={value}
                error={errors?.city && errors?.city?.message}
                maxLength={30}
              />
            )}
          />
        </S.Container>
      </ThemedScrollView>
      <S.Button>
        <Button
          type="primary"
          icon="chevron-forward"
          sizeIcon={24}
          colorIcon={Colors.white}
          onPress={onSubmitRegisterTeam}
          disabled={!isValid}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 20,
            width: 46,
            height: 46,
          }}
        />
      </S.Button>
    </View>
  );
}

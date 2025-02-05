import { Controller } from 'react-hook-form';

import { LoadingScreen } from '@/src/components/LoadingScreen/LoadingScreen';
import Input from '@/src/components/Input/Input';
import SelectDropdown from '@/src/components/SelectDropdown/SelectDropdown';
import { Button } from '@/src/components/Button/Button';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';

import { useAccountSettingsController } from './AccountSettings.controller';

import { Colors } from '@/src/constants/Colors';
import { states } from '@/src/constants/States';

import { formatDate, formatDateInput } from '@/src/utils/formatDate';
import { formatPhone } from '@/src/utils/formatPhone';

import { Ionicons } from '@expo/vector-icons';

import * as S from './AccountSettings.styles';

export default function AccountSettingsScreen() {
  const {
    handleSubmit,
    onSubmitEditUser,
    control,
    errors,
    isLoading,
    shouldDisabledButton,
  } = useAccountSettingsController();

  return (
    <ThemedScrollView>
      <S.Container>
        <LoadingScreen isLoading={isLoading} />
        <ThemedText type="title">Configurações da conta</ThemedText>
        <ThemedText>Informações gerais do jogador, dados pessoais.</ThemedText>
        <S.EditAccount>
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
            name="email"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                label="E-mail"
                placeholder="E-mail"
                icon={
                  <Ionicons
                    name="person-outline"
                    size={24}
                    color={Colors.gray300}
                  />
                }
                onChangeText={e => onChange(e.trim().replace(/ /g, ''))}
                value={value}
                error={errors?.email && errors?.email?.message}
                maxLength={50}
                autoCapitalize="none"
              />
            )}
          />
          <Controller
            name="birthdate"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                label="Data de nascimento"
                placeholder="Data de nascimento"
                icon={
                  <Ionicons
                    name="calendar-number-outline"
                    size={24}
                    color={Colors.gray300}
                  />
                }
                onChangeText={e => {
                  const formattedDate = formatDateInput(e);
                  onChange(formattedDate);
                }}
                value={formatDate(value)}
                error={errors?.birthdate && errors?.birthdate?.message}
                maxLength={10}
                autoCapitalize="none"
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                label="Telefone"
                placeholder="Telefone"
                icon={
                  <Ionicons
                    name="call-outline"
                    size={24}
                    color={Colors.gray300}
                  />
                }
                onChangeText={e => {
                  const formattedPhone = formatPhone(e);
                  onChange(formattedPhone);
                }}
                value={formatPhone(value || '')}
                error={errors?.phone && errors?.phone?.message}
                maxLength={15}
                autoCapitalize="none"
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
                placeholder="Cidade"
                onChangeText={e => onChange(e)}
                value={value}
                error={errors?.city && errors?.city?.message}
                maxLength={30}
              />
            )}
          />
          <S.ContainerButton>
            <Button
              text="Salvar"
              disabled={shouldDisabledButton}
              onPress={handleSubmit(onSubmitEditUser)}
            />
          </S.ContainerButton>
        </S.EditAccount>
      </S.Container>
    </ThemedScrollView>
  );
}

import { LoadingScreen } from '@/src/components/LoadingScreen/LoadingScreen';
import Input from '@/src/components/Input/Input';
import SelectDropdown from '@/src/components/SelectDropdown/SelectDropdown';
import { Button } from '@/src/components/Button/Button';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';

import { useAccountSettingsController } from './AccountSettings.controller';

import { Colors } from '@/src/constants/Colors';

import { formatPhone } from '@/src/utils/formatPhone';
import { formatBirthdate } from '@/src/utils/formatBirthdate';

import { Ionicons } from '@expo/vector-icons';

import * as S from './AccountSettings.styles';

export default function AccountSettingsScreen() {
  const { formData, setFormData, isLoading, states, handleUpdate } =
    useAccountSettingsController();

  return (
    <ThemedScrollView>
      <S.Container>
        <LoadingScreen isLoading={isLoading} />
        <ThemedText type="title">Configurações da conta</ThemedText>
        <ThemedText>Informações gerais do jogador, dados pessoais.</ThemedText>
        <S.EditAccount>
          <Input
            placeholder="Nome"
            value={formData.name}
            onChangeText={value =>
              setFormData(prev => ({ ...prev, name: value }))
            }
          />
          <Input
            placeholder="Nickname"
            value={formData.nickname}
            onChangeText={value =>
              setFormData(prev => ({ ...prev, nickname: value }))
            }
            maxLength={20}
          />
          <Input
            placeholder="E-mail"
            icon={
              <Ionicons
                name="person-outline"
                size={24}
                color={Colors.gray300}
              />
            }
            value={formData.email}
            onChangeText={value =>
              setFormData(prev => ({ ...prev, email: value }))
            }
          />
          <Input
            placeholder="Data de nascimento"
            icon={
              <Ionicons
                name="calendar-number-outline"
                size={24}
                color={Colors.gray300}
              />
            }
            value={formData.birthdate}
            onChangeText={value => {
              const formattedDate = formatBirthdate(value);
              setFormData(prev => ({ ...prev, birthdate: formattedDate }));
            }}
            maxLength={10}
          />
          <Input
            placeholder="Telefone"
            icon={
              <Ionicons name="call-outline" size={24} color={Colors.gray300} />
            }
            value={formatPhone(formData.phone)}
            onChangeText={value => {
              const formattedPhone = formatPhone(value);
              setFormData(prev => ({ ...prev, phone: formattedPhone }));
            }}
            maxLength={15}
          />
          <S.ContainerSelect>
            <SelectDropdown
              data={states}
              placeholder="UF"
              defaultOption={{
                key: formData.uf,
                value: formData.uf,
              }}
              setSelected={(value: string) => {
                setFormData(prev => ({ ...prev, uf: value }));
              }}
            />
            <S.FullWidthInputt>
              <Input
                placeholder="Cidade"
                value={formData.city}
                onChangeText={value =>
                  setFormData(prev => ({ ...prev, city: value }))
                }
              />
            </S.FullWidthInputt>
          </S.ContainerSelect>
          <S.ContainerButton>
            <Button text="Salvar" onPress={handleUpdate} disabled={isLoading} />
          </S.ContainerButton>
        </S.EditAccount>
      </S.Container>
    </ThemedScrollView>
  );
}

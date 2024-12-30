import { LoadingScreen } from '@/src/components/LoadingScreen/LoadingScreen';
import Input from '@/src/components/Input/Input';
import SelectDropdown from '@/src/components/SelectDropdown/SelectDropdown';
import { Button } from '@/src/components/Button/Button';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';

import { useAccountSettingsController } from './AccountSettings.controller';

import { Colors } from '@/src/constants/Colors';

import { Ionicons } from '@expo/vector-icons';

import * as S from './AccountSettings.styles';

export default function AccountSettingsScreen() {
  const { userData, isLoading, states, formatPhone } =
    useAccountSettingsController();

  return (
    <ThemedScrollView>
      <S.Container>
        <LoadingScreen isLoading={isLoading} />
        <ThemedText type="title">Configurações da conta</ThemedText>
        <ThemedText>Informações gerais do jogador , dados pessoais.</ThemedText>
        <S.EditAccount>
          <Input placeholder="Nome" value={userData?.name} />
          <Input placeholder="Nickname" value={userData?.nickname} />
          <Input
            placeholder="E-mail"
            icon={
              <Ionicons
                name="person-outline"
                size={24}
                color={Colors.gray300}
              />
            }
            value={userData?.email}
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
            value={userData?.birthdate || ''}
          />
          <Input
            placeholder="Telefone"
            icon={
              <Ionicons name="call-outline" size={24} color={Colors.gray300} />
            }
            value={formatPhone(userData?.phone)}
          />
          <S.ContainerSelect>
            <SelectDropdown
              data={states}
              placeholder="UF"
              defaultOption={{
                key: userData?.uf,
                value: userData?.uf,
              }}
              setSelected={(value: string) => {
                return value;
              }}
            />
            <S.FullWidthInputt>
              <Input placeholder="Cidade" value={userData?.city} />
            </S.FullWidthInputt>
          </S.ContainerSelect>
          <S.ContainerButton>
            <Button text="Salvar" disabled />
          </S.ContainerButton>
        </S.EditAccount>
      </S.Container>
    </ThemedScrollView>
  );
}

import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import Input from '@/src/components/Input/Input';
import { Button } from '@/src/components/Button/Button';
import Select from '@/src/components/Select/Select';
import { Colors } from '@/src/constants/Colors';

import { Ionicons } from '@expo/vector-icons';

import * as S from './AccountSettings.styles';
import { useAccountSettingsController } from './AccountSettings.controller';

export default function AccountSettingsScreen() {
  const { uf, cities } = useAccountSettingsController();

  return (
    <ThemedScrollView>
      <S.Container>
        <ThemedText type="title">Configurações da conta</ThemedText>
        <ThemedText>Informações gerais do jogador , dados pessoais.</ThemedText>
        <S.EditAccount>
          <Input placeholder="Nome" />
          <Input placeholder="Nickname" />
          <Input
            placeholder="E-mail"
            icon={
              <Ionicons
                name="person-outline"
                size={24}
                color={Colors.gray300}
              />
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
          />
          <Input
            placeholder="Telefone"
            icon={
              <Ionicons name="call-outline" size={24} color={Colors.gray300} />
            }
          />
          <S.ContainerSelect>
            <Select items={uf} placeholder="UF" style={{ width: 130 }} />
            <S.FullWidthSelect>
              <Select items={cities} placeholder="Cidade" />
            </S.FullWidthSelect>
          </S.ContainerSelect>
          <S.ContainerButton>
            <Button text="Salvar" disabled />
          </S.ContainerButton>
        </S.EditAccount>
      </S.Container>
    </ThemedScrollView>
  );
}

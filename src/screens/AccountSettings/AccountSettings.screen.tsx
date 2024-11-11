import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import Input from '@/src/components/Input/Input';
import { Button } from '@/src/components/Button/Button';

import * as S from './AccountSettings.styles';

export default function AccountSettingsScreen() {
  return (
    <ThemedScrollView>
      <S.Container>
        <ThemedText type="title">Configurações da conta</ThemedText>
        <ThemedText>Informações gerais do jogador , dados pessoais.</ThemedText>
        <S.EditAccount>
          <Input placeholder="Nome" />
          <Input placeholder="Nickname" />
          <Input placeholder="E-mail" />
          <Input placeholder="Data de nascimento" />
          <Input placeholder="Telefone" />
          <Button text="Salvar" disabled />
        </S.EditAccount>
      </S.Container>
    </ThemedScrollView>
  );
}

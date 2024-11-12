import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import Input from '@/src/components/Input/Input';
import { Button } from '@/src/components/Button/Button';
import { Colors } from '@/src/constants/Colors';

import * as S from './DisableAccount.styles';
import ModalDisableAccount from './components/ModalDisableAccount';
import { useDisableAccountController } from './DisableAccount.controller';

export default function DisableAccountScreen() {
  const {
    isModalVisible,
    handleOpenModal,
    handleCloseModal,
    handleDisableAccount,
  } = useDisableAccountController();

  return (
    <ThemedScrollView>
      <S.Container>
        <ThemedText type="title">Desativar conta</ThemedText>
        <ThemedText>
          Não se preocupe ao desativar sua conta, você poderá reativá-la a
          qualquer momento. Se um dia decidir voltar, estaremos prontos para
          recebê-lo de braços abertos! Sentiremos sua falta em campo.
        </ThemedText>
        <S.ContainerInput>
          <Input placeholder="Senha" />
        </S.ContainerInput>
        <Button
          text="Desativar conta"
          style={{ backgroundColor: Colors.red }}
          onPress={handleOpenModal}
        />
      </S.Container>

      <ModalDisableAccount
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onDisableAccount={handleDisableAccount}
      />
    </ThemedScrollView>
  );
}

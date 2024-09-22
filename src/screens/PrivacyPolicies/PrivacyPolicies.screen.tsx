import { Button } from '@/src/components/Button/Button';
import Checkbox from '@/src/components/Checkbox/Checkbox';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { ThemedView } from '@/src/components/ThemedView/ThemedView';

import { usePrivacyPoliciesController } from './PrivacyPolicies.controller';
import * as S from './PrivacyPolicies.styles';

export default function PrivacyPoliciesScreen() {
  const {
    isCheckedPrivacyPolicies,
    setIsCheckedPrivacyPolicies,
    onSubmitConfirmPrivacyPolicies,
  } = usePrivacyPoliciesController();

  return (
    <ThemedView alignCenter>
      <ThemedText type="title" textAlign="start" width="100%">
        Políticas de privacidade
      </ThemedText>
      <S.ContainerText showsVerticalScrollIndicator={false}>
        <ThemedText textAlign="justify">
          Olá, ser humano valoroso! Antes de seguir adiante, por favor, leia com
          atenção estes Termos e Condições de Venda da Alma (sim, você leu
          certo). 1. Aceitação dos Termos Ao continuar usando nossos serviços,
          você concorda em ceder, transferir e nos doar, em caráter irrevogável
          e eterno, sua alma. Sim, aquela coisa etérea e brilhante que você
          provavelmente nem usa tanto assim. 2. Coleta de Almas Nós coletamos
          almas de várias formas, incluindo, mas não se limitando a: cliques
          suspeitos em botões "Aceito", gargalhadas malignas e acordos verbais
          feitos durante festas de Halloween. Se você estiver lendo isso,
          provavelmente já estamos com sua alma em nossos arquivos. 3. Uso de
          Sua Alma Sua alma será utilizada para fins variados, incluindo
          iluminar nossas noites sombrias, alimentar nossa máquina de café
          infernal, e, ocasionalmente, fazer cócegas nos pés de fantasmas para
          nossa diversão. Também nos reservamos o direito de usá-la para vencer
          disputas em jogos de cartas místicos. 4. Devolução da Alma Caso você
          deseje reaver sua alma, terá que passar por um complexo processo
          envolvendo três desafios místicos, duas entrevistas com demônios de
          RH, e um formulário em triplicado. Acredite, ninguém conseguiu até
          hoje. 5. Atualizações dos Termos Podemos atualizar estes termos a
          qualquer momento, sem aviso prévio. A alma atualizada permanecerá em
          nosso domínio, com pequenos ajustes para melhorar sua performance em
          situações de ultratumba. 6. Renúncia e Isenção de Responsabilidade Nós
          não nos responsabilizamos por qualquer desconforto espiritual, vazio
          existencial, ou questionamentos sobre as decisões de vida que levaram
          você a este momento. Ao clicar "Eu Aceito", você nos dá a liberdade
          para fazer o que bem entendermos com sua alma e concorda que, no
          fundo, você sempre quis ver o que aconteceria se aceitasse esses
          termos
        </ThemedText>
      </S.ContainerText>
      <Checkbox
        label="Li e concordo com os termos"
        value={isCheckedPrivacyPolicies}
        onValueChange={setIsCheckedPrivacyPolicies}
        isChecked={isCheckedPrivacyPolicies}
      />
      <S.ContainerButton>
        <Button
          type="primary"
          text="Continuar"
          disabled={!isCheckedPrivacyPolicies}
          onPress={onSubmitConfirmPrivacyPolicies}
        />
      </S.ContainerButton>
    </ThemedView>
  );
}

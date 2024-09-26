import { Svg } from '@/src/assets/svgs/svg';
import { Button } from '@/src/components/Button/Button';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { ThemedView } from '@/src/components/ThemedView/ThemedView';

import { useRegisterUserSportsController } from './RegisterUserSports.controller';
import * as S from './RegisterUserSports.styles';

export default function RegisterUserSportsScreen() {
  const {
    dataSports,
    handleSportsSelecteds,
    sportsSelected,
    onSubmitRegisterUserSports,
  } = useRegisterUserSportsController();

  return (
    <ThemedView>
      <S.ContainerText>
        <ThemedText type="title">
          Quais esportes você gostaria de participar? Escolha seus favoritos
          para começarmos!
        </ThemedText>
        <ThemedText>
          Não se preocupe, você pode alterar suas preferencias a qualquer
          momento na tela de perfil do jogador.
        </ThemedText>
      </S.ContainerText>
      <S.ContainerSports>
        {dataSports.map((sport, index) => (
          <S.ButtonSport
            key={index}
            onPress={() => handleSportsSelecteds(sport)}
          >
            <Svg
              icon={sport}
              height="92"
              width="92"
              style={{ opacity: sportsSelected.includes(sport) ? 1 : 0.5 }}
            />
          </S.ButtonSport>
        ))}
      </S.ContainerSports>
      <S.ContainerButton>
        <Button
          type="primary"
          text="Continuar"
          disabled={sportsSelected.length === 0}
          onPress={onSubmitRegisterUserSports}
        />
      </S.ContainerButton>
    </ThemedView>
  );
}

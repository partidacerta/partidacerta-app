import { Controller } from 'react-hook-form';

import { Button } from '@/src/components/Button/Button';
import Input from '@/src/components/Input/Input';
import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';

import { useRegisterTeamInfoController } from './RegisterTeamInfo.controller';
import * as S from './RegisterTeamInfo.styles';

export default function RegisterTeamInfoScreen() {
  const { errors, control, isValid, onSubmitRegisterTeamInfo } =
    useRegisterTeamInfoController();

  return (
    <ThemedScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
    >
      <S.Container>
        <S.ContainerInput>
          <Controller
            name="email"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                label="Email contato"
                placeholder="E-mail"
                onChangeText={e => onChange(e)}
                value={value}
                error={errors?.email && errors?.email?.message}
                maxLength={30}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                label="Telefone contato"
                placeholder="Telefone"
                onChangeText={e => onChange(e)}
                value={value}
                error={errors?.phone && errors?.phone?.message}
                maxLength={15}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                label="Descrição"
                placeholder="Digite sua mensagem"
                multiline
                numberOfLines={4}
                onChangeText={e => onChange(e)}
                value={value}
                error={errors?.description && errors?.description?.message}
                maxLength={500}
              />
            )}
          />
        </S.ContainerInput>
        <S.Button>
          <Button
            text="Finalizar"
            onPress={onSubmitRegisterTeamInfo}
            disabled={!isValid}
          />
        </S.Button>
      </S.Container>
    </ThemedScrollView>
  );
}

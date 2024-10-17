import styled from 'styled-components/native';

import { ThemedText } from '@/src/components/ThemedText/ThemedText';

export const ContainerText = styled.View`
  gap: 10px;
  width: 70%;
`;

export const ContainerInputs = styled.View`
  width: 100%;
  margin-top: 30%;
  margin-bottom: 10px;
  gap: 24px;
`;

export const ContainerValidatorPassword = styled.View`
  margin-bottom: 40%;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 6px;
`;

export const TextCheckPassword = styled(ThemedText)`
  min-width: 31%;
`;

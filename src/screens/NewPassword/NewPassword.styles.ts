import styled from 'styled-components/native';

import { ThemedText } from '@/src/components/ThemedText/ThemedText';

interface GeneralSettingsProps {
  isGeneralSettings: boolean;
}

export const ContainerText = styled.View`
  gap: 10px;
`;

export const ContainerInputs = styled.View<GeneralSettingsProps>`
  width: 100%;
  margin-top: ${props => (props.isGeneralSettings ? '10%' : '30%')};
  margin-bottom: 10px;
  gap: 24px;
`;

export const ContainerValidatorPassword = styled.View<GeneralSettingsProps>`
  margin-bottom: ${props => (props.isGeneralSettings ? '20%' : '40%')};
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 6px;
`;

export const TextCheckPassword = styled(ThemedText)`
  min-width: 31%;
`;

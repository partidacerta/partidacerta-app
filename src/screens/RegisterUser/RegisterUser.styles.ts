import styled from 'styled-components/native';

import { ThemedScrollView } from '@/src/components/ThemedScrollView/ThemedScrollView';
import { ThemedText } from '@/src/components/ThemedText/ThemedText';
import { Colors } from '@/src/constants/Colors';

export const ContainerScreen = styled(ThemedScrollView)`
  padding-top: 20%;
`;

export const ContainerSubtitle = styled.View`
  flex-direction: row;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 6px;
`;

export const ContainerInputs = styled.View`
  width: 100%;
  margin-top: 60px;
  margin-bottom: 10px;
  gap: 24px;
  position: relative;
`;

export const ContainerTextEmailVerify = styled.View`
  position: absolute;
  height: 24px;
  width: 100%;
  top: 54px;
  padding-left: 18px;
`;

export const TextCheckPassword = styled(ThemedText)`
  min-width: 31%;
`;

export const Divider = styled.View`
  height: 1px;
  border-radius: 4px;
  width: 26%;
  background-color: ${Colors.white};
`;

export const ContainerDivider = styled.View`
  flex: 1;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonGoogle = styled.TouchableOpacity``;

export const FooterScreen = styled.View`
  margin-top: 40px;
  gap: 30px;
  width: 100%;
  align-items: center;
`;

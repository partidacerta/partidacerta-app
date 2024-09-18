import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

import { ThemedText } from '../ThemedText/ThemedText';

export const Container = styled.View``;

export const ContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  border: none;
  padding: 0px 18px;
  height: 50px;
  border-radius: 12px;
  background-color: ${Colors.darkOpacity};
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${Colors.white};
  font-family: 'RobotoRegular';
`;

export const Icon = styled.View`
  margin-left: 10px;
`;

export const MessageError = styled(ThemedText)`
  color: red;
  margin-top: 4px;
  padding-left: 18px;
  min-height: 24px;
`;

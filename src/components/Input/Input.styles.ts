import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

import { ThemedText } from '../ThemedText/ThemedText';

interface InputProps {
  width?: string | number;
  backgroundColor?: string;
  multiline?: boolean;
}

export const Container = styled.View<InputProps>`
  width: ${({ width }) => (width ? width : '100%')};
`;

export const ContainerInput = styled.View<InputProps>`
  flex-direction: row;
  align-items: ${({ multiline }) => (multiline ? 'flex-start' : 'center')};
  border: none;
  padding: ${({ multiline }) => (multiline ? '10px 18px' : '0px 18px')};
  height: ${({ multiline }) => (multiline ? '160px' : '50px')};
  border-radius: 12px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : Colors.darkOpacity};
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
  color: ${Colors.red};
  margin-top: 4px;
  padding-left: 18px;
  min-height: 24px;
`;

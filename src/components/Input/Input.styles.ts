import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border: none;
  padding: 0px 18px;
  height: 50px;
  border-radius: 12px;
  margin: 16px auto;
  background-color: ${Colors.darkOpacity};
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${Colors.white};
`;

export const Icon = styled.View`
  margin-left: 10px;
`;

export const MessageError = styled.Text`
  color: red;
`;

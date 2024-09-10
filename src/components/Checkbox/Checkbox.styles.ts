import styled from 'styled-components/native';
import { Colors } from '@/src/constants/Colors';
import { ThemedText } from '../ThemedText/ThemedText';
import { Checkbox as ExpoCheckbox } from 'expo-checkbox';

export const Container = styled.View`
  margin-bottom: 24px;
`;

export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0px 18px;
`;

export const StyledCheckbox = styled(ExpoCheckbox)`
  width: 16px;
  height: 16px;
  border: none;
  border-radius: 4px;
  background-color: ${Colors.white};
`;

export const Label = styled(ThemedText)`
  font-size: 16px;
  color: ${Colors.white};
  margin-left: 10px;
  font-family: 'RobotoRegular';
`;

export const MessageError = styled(ThemedText)`
  color: red;
  margin-top: 4px;
  padding-left: 18px;
  min-height: 24px;
`;

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

export const CheckboxWrapper = styled.View<{ isChecked: boolean }>`
  padding: 4px;
  background-color: ${({ isChecked }) =>
    isChecked ? Colors.blue : Colors.white};
  border-radius: 4px;
`;

export const StyledCheckbox = styled(ExpoCheckbox)`
  width: 12px;
  height: 12px;
  border: none;
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

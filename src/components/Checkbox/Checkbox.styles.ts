import { Checkbox as ExpoCheckbox } from 'expo-checkbox';
import styled from 'styled-components/native';

import { Colors } from '@/src/constants/Colors';

import { ThemedText } from '../ThemedText/ThemedText';

interface CheckboxProps {
  isChecked: boolean;
}

export const CheckboxContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const CheckboxWrapper = styled.View<CheckboxProps>`
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

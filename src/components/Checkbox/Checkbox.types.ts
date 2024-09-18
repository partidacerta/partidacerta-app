import { CheckboxProps as ExpoCheckboxProps } from 'expo-checkbox';

export interface CheckboxProps extends ExpoCheckboxProps {
  label?: string;
  error?: string;
  isChecked?: boolean;
  value: boolean;
  onValueChange: (_: boolean) => void;
}

export interface IUseChecboxControllerProps {
  handlePressCheckbox: () => void;
}

export interface ChecboxControllerProps {
  onValueChange: (_: boolean) => void;
  value: boolean;
}

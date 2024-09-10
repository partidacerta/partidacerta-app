import { CheckboxProps as ExpoCheckboxProps } from 'expo-checkbox';

export interface CheckboxProps extends ExpoCheckboxProps {
  label?: string;
  error?: string;
}

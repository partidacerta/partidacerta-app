import {
  ChecboxControllerProps,
  IUseChecboxControllerProps,
} from './Checkbox.types';

export const useCheckboxController = ({
  onValueChange,
  value,
}: ChecboxControllerProps): IUseChecboxControllerProps => {
  const handlePressCheckbox = () => {
    onValueChange(!value);
  };

  return { handlePressCheckbox };
};

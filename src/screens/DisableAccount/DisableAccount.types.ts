import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';

export interface IUseDisableAccountProps {
  isLoading: boolean;
  isModalVisible: boolean;
  isVisiblePassword: boolean;
  handleShowPassword: () => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleDisableAccount: (e?: React.BaseSyntheticEvent) => Promise<void>; // Tipo ajustado aqui
  control: Control<FormRequiredDisableAccount>;
  errors: FieldErrors<FormRequiredDisableAccount>;
  isValid: boolean;
}

export interface FormRequiredDisableAccount {
  password: string;
}

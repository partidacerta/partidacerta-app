import { showMessageError } from './showMessage';

export const triggerError = (message: string): void => {
  showMessageError(message);
};

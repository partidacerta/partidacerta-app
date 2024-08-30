import { showMessageError } from './showMessage';

export const triggerError = (
  title: string,
  error: string,
  buttonText?: string,
  route?: string
): void => {
  showMessageError(title, error, buttonText, route);
};

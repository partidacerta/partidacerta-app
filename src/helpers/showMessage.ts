import useErrorStore from '../store/error/error.store';

export const showMessageSuccess = (
  title: string,
  error: string,
  buttonText?: string,
  route?: string,
  back?: boolean
): void => {
  useErrorStore
    .getState()
    .showErrorMessage(title, error, 'success', buttonText, route, back);
};

export const showMessageError = (
  title: string,
  error: string,
  buttonText?: string,
  route?: string
): void => {
  useErrorStore
    .getState()
    .showErrorMessage(title, error, 'error', buttonText, route);
};

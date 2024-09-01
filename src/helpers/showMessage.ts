import useErrorStore from '../store/error/error.store';

export const showMessageSuccess = (message: string): void => {
  useErrorStore.getState().showErrorMessage(message, 'success');
};

export const showMessageError = (message: string): void => {
  useErrorStore.getState().showErrorMessage(message, 'error');
};

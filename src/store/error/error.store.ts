import { create } from 'zustand';

import { ErrorStoreProps, MessageTypes } from './error.types';

const initialState = {
  hasError: false,
  type: null,
  message: '',
  color: '',
};

const useErrorStore = create<ErrorStoreProps>(set => ({
  ...initialState,

  showErrorMessage: (message: string, type: keyof MessageTypes) => {
    set({ hasError: true, message, type });
  },

  closePopup: () => {
    set({ hasError: false, type: null });
  },

  changeColor: (color: string) => {
    set({ color });
  },
}));

export default useErrorStore;

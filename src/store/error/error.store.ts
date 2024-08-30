import { create } from 'zustand';

import { ErrorStoreProps, MessageTypes } from './error.types';

const initialState = {
  hasError: false,
  error: '',
  type: null,
  title: '',
  buttonText: '',
  route: '',
  color: '',
  back: false,
};

const useErrorStore = create<ErrorStoreProps>((set, get) => ({
  ...initialState,

  showErrorMessage: (
    title: string,
    error: string,
    type: keyof MessageTypes,
    buttonText?: string,
    route?: string,
    back?: boolean
  ) => {
    set({ hasError: true, title, error, type, buttonText, route, back });
  },

  closePopup: () => {
    set({ hasError: false, error: '', type: null });
  },

  changeColor: (color: string) => {
    set({ color });
  },
}));

export default useErrorStore;

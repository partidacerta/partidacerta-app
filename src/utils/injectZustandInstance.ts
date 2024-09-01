/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoreApi, UseBoundStore } from 'zustand';

export let accessToken: string;
// @ts-expect-error
export let store: UseBoundStore<any, StoreApi<any>>;

export const injectZustandInstance = (
  // @ts-expect-error
  zustand: UseBoundStore<any, StoreApi<any>>
): void => {
  store = zustand;
};

export const injectTokenToAxios = (token: string): void => {
  accessToken = token;
};

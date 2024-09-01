/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from 'axios';

import { store } from '@/src/utils/injectZustandInstance';

const createInstance = (baseURL: string, type?: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    headers: {
      Accept: type || 'application/json',
    },
  });

  instance.interceptors.request.use(
    async (config: AxiosRequestConfig): Promise<any> => {
      const { access_token } = store.getState();

      if (access_token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${access_token}`,
          'Content-Type': type || 'application/json',
        } as AxiosRequestHeaders;
      }
      return config;
    },
    async error => {
      return await Promise.reject(error);
    }
  );

  return instance;
};

export const instance = createInstance(
  process.env.EXPO_PUBLIC_API_URL || '',
  'application/json'
);

export const instanceImage = createInstance(
  process.env.EXPO_PUBLIC_API_URL || '',
  'multipart/form-data'
);
